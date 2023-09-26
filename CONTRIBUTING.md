# Contribution Guidelines

Thank you for considering contributing to our project! Before getting started, please ensure you are familiar with the guidelines outlined below.

## 🔍 General Guidelines

1. **React Components**: Always use arrow functions for React components.
2. **Pages**: Pages should not be made up of components only. They should serve as the layout or structure for your route and fetch necessary data.
3. **Component Creation**: Only create new components when necessary. Examples include reusable components like cards, list items, or components that hold their own state without overwhelming the parent page.
4. **Formatters and Linters**: Before submitting a PR, ensure you've run the necessary formatters and linters, specifically `eslint` and `prettier`.
5. **Testing**: Write end-to-end (e2e) tests for pages when possible. For components with logic and not just aesthetics, ensure unit tests are in place.
6. **Single Page Focus**: If you start working on a page, stick to that page only. Do not make changes to other pages.
7. **Task Dedication**: Dedicate yourself to one task. A Pull Request should only solve one task. Do not mix multiple tasks in one PR.
8. **Pull Requests**: When submitting a PR, provide context where necessary. Ideally, explain the changes made in the Pull Request.
9. **Dependencies**: Do not update dependencies on your own. The `renovate` bot will handle that. If you need to add a dependency for your task, ensure it doesn't break existing code. Likewise, don't remove dependencies without confirming their utility.
10. **Commit Conventions**: Every commit should follow the [conventional commit guidelines](https://www.conventionalcommits.org).
11. **Commit Granularity**: Don't make a single commit for the entire task. Commit based on the completed phases of the task.
12. **Project Structure**: Stick to the file structure outlined in `STRUCTURE.md` and refer to `README.md` for additional documentation.

By adhering to these guidelines, you'll ensure that your contributions align with the project's standards and practices, making the review and merge process smoother for everyone involved. Thank you for your cooperation!
