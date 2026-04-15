# Welcome to Analytics project

Extensions make the life of a developer easier by providing assistance in several key tasks. Study and analysis of such extensions related data could give very useful insights to publishers so that they can carefully craft new extensions that are truly valuable.
The current project gives some meaningful insights into the dataset containing most used Extensions in VS-Code.

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

Clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

## Static Method
Deploying on Hugging Face spaces:
Prerequisites
Hugging Face account at huggingface.co
Git installed on your machine
Node.js installed to build the project
**Step 1 — Build the project**
Run the production build inside your project folder:
npm run build

This creates a dist/ folder containing the compiled static files.
**Step 2 — Create a new Space**
Go to huggingface.co/new-space
Give it a name (e.g. Vs-code-ext)
Under Space SDK, select Static
Set visibility to Public
Click Create Space
**Step 3 — Clone the Space repository**
git clone https://huggingface.co/spaces/UserName/Space-Name
cd Vs-code-ext

**Step 4 — Copy build output into the cloned repo**
Copy everything inside your project's dist/ folder into the cloned Space folder

**Step 5 — Add a README with Space metadata**
Create or replace the README.md in the Space folder with the following at the very top:
---
title: Top VS Code Extensions
emoji: 🧩
colorFrom: blue
colorTo: purple
sdk: static
pinned: false
---

**Step 6 — Push to Hugging Face**
git add .
git commit -m "Commit "
git push

**Step 7 — View your Space**
Go to:
https://huggingface.co/spaces/UserName/HFSpaceName
Updating the deployment
Whenever you make changes, rebuild and repeat Steps 4 and 6:
npm run build
cp -r dist/* /path/to/cloned/space/
cd /path/to/cloned/space/
git add .
git commit -m "Update dashboard"
git push

