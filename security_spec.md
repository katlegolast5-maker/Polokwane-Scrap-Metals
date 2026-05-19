# Security Specification - Polokwane Scrap Metals

## Data Invariants
- `quotes`: Public can create (`create` only). Only authenticated admins can `read`/`list`/`update`/`delete`.
- `contacts`: Public can create (`create` only). Only authenticated admins can `read`/`list`/`update`/`delete`.
- All writes must include a valid `createdAt` server timestamp.
- String fields must have size constraints to prevent resource exhaustion.

## The "Dirty Dozen" Payloads

### Quotes
1.  **Identity Spoofing**: `create` a quote with a fake `userId` field to impersonate another user (though it's public create, we want to ensure no shadow fields).
2.  **State Shortcutting**: `create` a quote with a `status: 'processed'` field if we had a status field (not currently in blueprint, but good practice).
3.  **Resource Poisoning**: `create` a quote where `name` is a 1MB string.
4.  **Admin Escalation**: `create` an admin document as a guest.
5.  **Unauthorized Read**: Attempt to `list` all quotes as a guest.
6.  **Unauthorized Update**: Attempt to `update` a quote as the person who created it (once submitted, it's final for the user).
7.  **Timestamp Spoofing**: `create` a quote with `createdAt` set to a date in the past.
8.  **Empty Keys**: `create` a quote with missing required fields.
9.  **Type Mismatch**: `create` a quote where `whatsappOptIn` is a string instead of a boolean.
10. **Malicious ID**: `create` a quote with a document ID containing special characters that could break queries.

### Contacts
11. **Guest Read**: Attempt to `get` a direct contact document by ID as a non-admin.
12. **Mass Delete**: Attempt to `delete` all contact messages as a regular authenticated user.

## The Test Runner (Plan)
We will verify that:
- `get(/quotes/someId)` fails for guests.
- `create(/quotes/newId)` succeeds for guests with valid data.
- `create(/quotes/newId)` fails for guests with `name.size() > 100`.
- `create(/admins/uid)` fails for anyone except existing admins (or locked down).
