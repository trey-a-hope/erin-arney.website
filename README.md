# Erin Arney Website

A personal website for Erin Arney, a writer, student and cancer survivor, with an about page, her poetry and research projects, a blog pulled from Blogger and a contact form. It's an Angular 5 app from 2018 styled with Bootstrap 3.

## Pages

Routes are defined in `src/app/routing.module.ts`:

| Path | Component | What it shows |
| --- | --- | --- |
| `/` | `HomeComponent` | photo carousel (Los Angeles, Chicago, New York) |
| `/about` | `AboutComponent` | Erin's story and guiding principles |
| `/projects` | `ProjectsComponent` | poetry and research publications |
| `/blog` | `BlogComponent` | posts on health, the Black community and current events |
| `/full-blog` | `FullBlogComponent` | a single post with share links |
| `/contact` | `ContactComponent` | name, email, phone and message form |
| `**` | `PageNotFoundComponent` | 404 page |

## How it works

- **Blog** (`src/app/services/blog.service.ts`) loads posts from the Blogger API v3 (`googleapis.com/blogger/v3/blogs/{blogId}/posts`), using the blog ID and API key set in that service.
- **Contact** (`src/app/services/email.service.ts`) posts the form as JSON to `src/assets/sendEmail.php`, so the built site needs a host that runs PHP and can send mail.
- Images live in `img/`.

## Tech stack

- Angular 5 with the Angular CLI (`.angular-cli.json`)
- Bootstrap 3
- Blogger API v3, a PHP mail script
- Karma + Jasmine and Protractor (CLI defaults)

## Getting started

Requires a Node.js version that Angular CLI 1.x supports (Node 8 or 10).

```sh
npm install
npm start          # ng serve on http://localhost:4200
npm run build      # ng build --prod, output in dist/
```

To deploy, upload `dist/` to a PHP-capable web host so the contact form's mail script runs.
