# SE1 Git Laboratory

## Purpose
This small static website is for practicing Git and GitHub basics: creating commits, using branches, and reviewing changes through pull requests.

## Files
- `index.html` — page structure
- `style.css` — page styling
- `script.js` — interactive Git tip button
- `.gitignore` — ignores local settings, generated output, and environment files

## Requirements
- A modern web browser
- Git installed
- A GitHub account for remote repository and pull-request steps
- VS Code or another text editor (optional)

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.
3. Click **Show Git tip** to test the JavaScript interaction.

## Suggested Git workflow
```bash
git status
git add index.html style.css script.js .gitignore README.md
git commit -m "Create laboratory website"
git log --oneline
```

## Branch and pull request workflow
1. Create a feature branch: `git switch -c feature/git-tip`
2. Make a small change and commit it.
3. Push the branch: `git push -u origin feature/git-tip`
4. Open a pull request on GitHub from `feature/git-tip` into `main`.
5. Review the change and merge the pull request.

## Safety
Do not commit passwords, tokens, personal information, or real `.env` files. A `.gitignore` file does not remove secrets that were committed earlier.

## Student details
- Student name: [Your full name]
- Course/section: BSCS1-01
- Subject: Software Engineering 1
