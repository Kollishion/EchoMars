import { test, expect } from "@playwright/test";

test("My first test", async function ({ page }) {
  expect(100).toBe(100);
});
test.skip("My second test", async function ({ page }) {
  expect(120).toBe(101);
});
test("My third test", async function ({ page }) {
  expect(20).toBe(20);
});
