# Structure of the `components` Folder

The `components` folder is essential for organizing and structuring your components in Next.js, especially when it comes to React Server Components and client components.

---

## 📁 Directory: `components`.

### Subcarpetas:

- `pages`: It contains page-specific components.
- `shared`: It contains components that can be used in multiple parts of the application.
- `styles`: Saves shared styles and themes.
- `thirdparty`: Reserve space for third-party components or libraries to be used in the project.

Within these main subfolders, there are two more divisions:

- `client`: For client components.
- `server`: For server components.

---

## 📂 `pages`

### Page-specific components

These components relate directly to a specific view or path in your application.

### Example of structure:

```
components/
├── pages/
│ │── home/
│ │ │── client/
│ │ │ │── FeaturedSection.jsx
│ │ │── server/
│ │ │── UserInfo.jsx
```

---

## 📂 `shared`

### Shared components

These components can be used anywhere in the application and are not tied to a specific view or path.

### Example of structure:

```
components/
├── shared/
│ ├── client/
│ │ ├── Button.jsx
│ ├── server/
│ ├── RecentPosts.jsx
```

---

## 📂 `styles`

### Shared styles and themes

Here you can store general styles, themes or any styling related components that are reusable.

### Example of structure:

```
components/
├── styles/
│ ├── ThemeToggle.jsx
│ ├── GlobalStyles.jsx
```

---

## 📂 `thirdparty`

### Third-party components or libraries

If you need to wrap or extend third-party library components, this is the place to do it.

### Example of structure:

```
components/
├── thirdparty/
│ ├── client/
| | ├── CustomSlider.jsx
│ ├── server/
│ ├── ThirdPartyDataFetch.jsx
```

---

By understanding and maintaining this structure in the `components` folder, you ensure a clear and coherent organization of your components, making it easier for any developer working on the project to navigate and understand the code.

# Structure of the `lib` Folder

The `lib` folder is used to store utilities, data types, custom hooks and other code fragments that are not components but are essential to the operation of the application.

---

## 📁 Main directory: `lib`

- `hooks`: Custom hooks that extend React functionality.
- `types`: Types and interfaces for TypeScript.
- `utils`: Utility functions that can be used throughout the application.

---

## 📂 `hooks`

Dedicated to custom hooks. These extend the capabilities of React, allowing the reuse of state logic or side effects.

```
├── hooks/
│ ├── useUserState.tsx
│ ├── useWindowSize.tsx
```

## 📂 `types`

Contains types and interfaces for TypeScript, aiding in static code verification and auto-completion.

```
├── types/
│ ├── user.d.ts
│ ├── post.d.ts
```

## 📂 `utils`

Utility functions. These can include functions for formatting data, performing calculations, handling dates and more.

```
├── utils/
│ ├── formatCurrency.ts
│ ├── parseDate.ts
```

Having a defined structure for the `lib` folder facilitates code reuse and keeps the project organized.
