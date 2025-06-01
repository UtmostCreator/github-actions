# Test info

- Name: getting events
- Location: C:\xampp\htdocs\actions\tests\events-api.spec.js:18:1

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
    at C:\xampp\htdocs\actions\tests\events-api.spec.js:24:33
```

# Test source

```ts
   1 | // @ts-check
   2 | import { test, expect } from '@playwright/test';
   3 |
   4 | test('event creation', async ({ request }) => {
   5 |   const testTitle = 'Test event';
   6 |   const response = await request.post('/', {
   7 |     data: {
   8 |       title: testTitle,
   9 |     },
  10 |   });
  11 |   expect(response.ok()).toBeTruthy();
  12 |   const resDataRaw = await response.body();
  13 |   const resData = JSON.parse(resDataRaw.toString());
  14 |   expect(resData).toHaveProperty('event.id');
  15 |   expect(resData.event.title).toBe(testTitle);
  16 | });
  17 |
  18 | test('getting events', async ({ request }) => {
  19 |   const response = await request.get('/');
  20 |   expect(response.ok()).toBeTruthy();
  21 |   const resDataRaw = await response.body();
  22 |   const resData = JSON.parse(resDataRaw.toString());
  23 |   expect(resData).toHaveProperty('events');
> 24 |   expect(resData.events.length).toBeGreaterThan(0);
     |                                 ^ Error: expect(received).toBeGreaterThan(expected)
  25 | });
  26 |
```