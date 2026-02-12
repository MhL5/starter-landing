# Panel starter

## Message structure (i18n)

Messages are grouped into three top-level namespaces:

| Namespace      | Purpose                                                                              | Key shape                    | Example                            |
| -------------- | ------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------- |
| **app**        | Route-specific copy: metadata, loading, error/not-found blocks, and page-level UI.   | Route path → sections → keys | `app["/"]["not-found"].title`      |
| **components** | Shared UI used across multiple pages (dialogs, sidebar, sheets, theme toggle, etc.). | Component name → keys        | `components.sidebar.toggleSidebar` |
| **hooks**      | Copy used by shared hooks (e.g. form validation, toasts).                            | Hook/feature name → keys     | —                                  |

## Conventions

- **app**: Use the route path as the first key (e.g. `"/"`, `"/login"`). Under each route, group by concern: `metadata`, `loading`, `not-found`, `error`, or page-specific sections.
- **components**: One object per reusable component; keys match usage (labels, aria, descriptions).
- **hooks**: One object per hook or shared behavior; keys describe the message (e.g. error text, button label).

Keep keys camelCase and values in the target language. Add new routes/sections under the correct namespace so all locale files stay in sync.
