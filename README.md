[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sl4cExfL)
# Full Stack Finds

A marketplace for buying and selling used full-stack items. Here's an example of the finished project:

https://full-stack-finds.vercel.app/

## Display the list of items on the home page

If you take a look at `src/fakeDatabase.ts` file, you can see the data that you'll use to display the items.

- In `src/app/page.tsx`, display a grid of the items.
  - Each item on the home page should display the image, name, and price
  - on desktop it should be multiple columns, on mobile it should be a single column

Use `Image`, not `img`.
You'll need `cdn.discordapp.com` in your `next.config.js` file:

```js
const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com'],
```

## Seperate Components

- Refactor the JSX that displays a single item for the grid into a `GridItem` component.
- Refactor the map that displays the list of grid items into a `GridItems` component
  - This component should import the `GridItem` and uses it to display all items.

Your home page should use `<GridItems />` and should **not** map over the items directly.

## Create a new page for an individual item

When you visit this page in the browser, [http://localhost:3000/item/1](http://localhost:3000/item/1), it should display the item with that id.

```ts
function ItemPage({ params }: { params: { id: string } }) {
```

- Setup the following route: `/src/app/item/[id]/page.tsx`
- Show the image, name, category, price, and description of a single item on that page.
- Put the JSX that displays the single item in an `Item` component.
- Make it look "good" on mobile and desktop.
- Add a `<Link` to the `GridItem` component to link to the `/item/id` page.
- Handle a situation where the item doesn't exist. All you have to do is tell the user "item doesn't exist".
- Create a custom `not-found.tsx` page that displays a 404 message when you navigate to a different page that doesn't exist.

> Make sure this is all dynamic, no hard coding ids or anything like that.

## Database

Once everything is working with the fake database, you'll need to switch to a real database. I've already created a database for you using neon, so you don't need to worry about that part. I've also written the schema and database files for you. You are reponsible for:

- Adding your details to .env.local
- Pushing the schema to the database
- Adding data to the database
- Writing queries in your pages to display the data from the database

### Environment Variables

I've already made a database for you. Your database `name` and `username` are both your username in d2l. Your password is `a_secure_password_1`
So if your username is `johndoe` then your database name is `johndoe`, your username is `johndoe` and your password is `a_secure_password_1`.

```sh
MIGRATION_DATABASE_URL='postgres://johndoe:a_secure_password_1@ep-ancient-grass-94214362.us-west-2.aws.neon.tech/johndoe?sslmode=verify-full'
DATABASE_URL='postgres://johndoe:a_secure_password_1@ep-ancient-grass-94214362.us-west-2.aws.neon.tech/johndoe'
```

Copy and paste those urls into your `.env.local` file and do a find and replace to replace all `johndoe` with your D2L username.

### Push

You should be able to view your database in drizzle studio. If you do, you'll notice no tables yet.

Push the schema to your database https://www.nexttonone.lol/setup-drizzle#push

### Seed

There is a `seed.ts` file in the root of the project. If you run this file, it will add all of the fake database items to the real database.

**run with node**

```
npx ts-node --compilerOptions '{"module": "commonjs"}' seed.ts
```

**or run with bun**

```
bun seed.ts
```

Feel free to add any custom data into the items table in drizzle studio.

### Query

Remove the fake database file and use the real database with drizzle queries instead.

## Categories

If you add a `category` query parameter to the home page, it should only display items that match that category.

Example: http://localhost:3000/?category=food

Update the home page to accept query params:

```tsx
export default function Home({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  console.log(searchParams.category)
```

Update the query to only return items that match the category when a category is provided in the url. Otherwise just return all items as before.

---

## Rubric

| **Task/Feature**                               | **Weightage** | **Summary**                                                                                             |
| ---------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| **Display the list of items on the home page** | 20%           | Display items in a grid with essential details (image, name, price) and ensure responsiveness.          |
| **Seperate Components**                        | 20%           | Refactor item display into `GridItem` and `GridItems` components; HomePage uses `<GridItems />`.        |
| **Create a new page for an individual item**   | 30%           | Set up a route for item details, ensure a responsive display, and handle errors for non-existent items. |
| **Database**                                   | 20%           | Set up the environment, push the schema, seed data, and transition from a fake to real database.        |
| **Categories**                                 | 10%           | Implement category filtering and modify the home page to handle category query parameters.              |
