

| **Environment Variables**                             | **Secrets**                                               | **GitHub Actions Environments**                         |
| ----------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| Dynamic values used in code (e.g., database name)     | Some dynamic values should not be exposed anywhere        | Jobs can reference different Environments               |
| May differ from workflow to workflow                  | Examples: Database credentials, API keys, etc.            | Environments allow extra protection rules               |
| Can be defined on Workflow-, Job-, or Step-level      | Secrets can be stored at Repository- or Environment-level | You can also store Secrets on the Environment-level     |
| Can be used in code and GitHub Actions Workflow       | Referenced via the `secrets` context object               | Adds flexibility and security per job/workflow          |
| Accessible via interpolation and `env` context object | Not accessible via interpolation (only via `secrets`)     | Useful for deployment approvals and branch restrictions |


`${{ env.DB_NAME }}` vs `${{ secrets.DB_PASSWORD }}` vs `environment: production`

https://raw.githubusercontent.com/UtmostCreator/github-actions/refs/heads/master/.github/workflows/deployment.yml


| Conditional Jobs & Steps                              | Matrix Jobs                                             | Reusable Workflows                                  |
|--------------------------------------------------------|----------------------------------------------------------|------------------------------------------------------|
| Control Step or Job execution with `if` expressions    | Run multiple Job configurations in parallel              | Workflows can be reused via the `workflow_call` event |
| Use `failure()`, `success()`, `cancelled()`, `always()`| Add or remove individual combinations                    | Reuse any logic (Jobs & Steps) as needed             |
| Use `continue-on-error` to ignore step failure         | Control job cancellation with `continue-on-error`        | Work with inputs, outputs, and secrets as required   |
