to make every action working - ensure you have updated your `env` and `secrets` fro mongodb.

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


Workflows that would otherwise be triggered using `on: push` or `on: pull_request` won't be triggered if you add any of the following strings to the commit message in a push, or the HEAD commit of a pull request:

```bash
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]

Another similar repo:

https://github.com/UtmostCreator/github-actions-and-docker

| **Type**              | **Description**                                                                 | **Use Case / Example**                                                                 |
|-----------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| **Containers**        | Packages of code + execution environment                                        | Great for creating reusable execution packages & ensuring consistency                  |
| **Containers for Jobs** | You can run Jobs in pre-defined environments                                   | Example: Same environment for testing + production<br>Build your own or use public images |
| **Service Containers** | Extra services used by Steps in Jobs                                            | Example: Locally running, isolated testing database<br>Based on custom/public images    |


# Different Types of Custom Actions

| JavaScript Actions                              | Docker Actions                                        | Composite Actions                                            |
|--------------------------------------------------|--------------------------------------------------------|---------------------------------------------------------------|
| Execute a JavaScript file                        | Create a Dockerfile with your required configuration   | Combine multiple Workflow Steps in one single Action          |
| Use JavaScript (NodeJS) + any packages of choice | Perform any task(s) with any language                  | Combine `run` (commands) and `uses` (Actions)                 |
| Straightforward (if you know JavaScript)         | Lots of flexibility but requires Docker knowledge      | Reuse shared steps without extra skills                       |


for custom actions you can also create separate repository and then reuse it.


Actions(steps) vs Reusable(multiple jobs+steps)

| Feature                 | **Custom Actions**                                   | **Reusable Workflows**                                 |
| ----------------------- | ---------------------------------------------------- | ------------------------------------------------------ |
| **Purpose**             | Encapsulate **individual steps** or logic            | Reuse entire **workflow blocks** (multiple jobs/steps) |
| **Granularity**         | Low-level (single task like building, uploading)     | High-level (entire CI/CD pipelines)                    |
| **Structure**           | Defined in `.github/actions/<your-action>` directory | Stored in `.github/workflows/<workflow>.yml`           |
| **Usage**               | Used with `uses:` inside a step                      | Called with `uses:` inside a `workflow_call` job       |
| **Languages Supported** | JavaScript, Docker, or YAML composite actions        | YAML only (built on top of actions)                    |
| **Use Case Examples**   | Upload to S3, linting, test runner                   | Deploy-to-staging workflow, test-and-release flow      |
| **Dependencies**        | May include `node_modules`, Dockerfile, etc.         | References other workflows via versioning or repo path |



| **What & Why?**                                                            | **Composite Actions**                                                       | **JavaScript & Docker Actions**                                                             |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Simplify Workflows & avoid repeated Steps                                 | Create custom Actions by combining multiple Steps                           | Write Action logic in JavaScript (NodeJS) with `@actions/toolkit`                           |
| Implement logic that solves a problem not solved by any public Action     | Composite Actions are like "Workflow Excerpts"                              | Alternatively: Create your own Action environment with Docker                                |
| Create & share Actions with the Community                                 | Use Actions (via `uses`) and Commands (via `run`) as needed                 | Either way: Use inputs, set outputs and perform any logic                                   |

```