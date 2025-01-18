To solve this issue, you can modify your layout and page components to fetch data conditionally or within each respective page component:

**Option 1: Conditional Data Fetching in Layout**

```javascript
// app/layout.js
import { getData } from './utils';

export default async function RootLayout({ children }) {
  let data = null;
  try {
    data = await getData();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <html>
      <body>
        {data && <div>Data: {data.someProperty}</div>}
        {children}
      </body>
    </html>
  );
}
```

**Option 2: Data Fetching in Each Page**

This is generally a more robust approach:

```javascript
// app/page.js
import { getData } from './utils';

export default async function Page() {
  const data = await getData();
  return (
    <div>Data: {data.someProperty}</div>
  );
}

// app/about/page.js
import { getAboutData } from './utils';

export default async function AboutPage() {
  const data = await getAboutData();
  return (
    <div>About Data: {data.someProperty}</div>
  );
}
```
This ensures that each page handles its data fetching, and the layout remains consistent and independent of specific data requirements.