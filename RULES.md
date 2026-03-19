# Critical Project Rules

## 1. Zero Tolerance for Secret Leaks
- **NEVER** commit environment variable files (`.env`, `.env.local`, `.env.development`, etc.) under ANY circumstances.
- An environment variable leak is considered a critical security failure.
- Always ensure `.gitignore` has broad rules like `.env*` to prevent accidental inclusion.

## 2. No Build Artifacts in Version Control
- **NEVER** commit build output directories (`dist`, `dist-ssr`, `.vercel`, etc.).
- **NEVER** commit framework cache directories (`.astro`, `.next`, etc.).
- **NEVER** commit dependency directories (`node_modules`).

Before executing any `git` push or commit operations, explicitly verify that `.gitignore` is present and comprehensive.
