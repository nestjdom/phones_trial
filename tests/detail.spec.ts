import { test, expect } from "@playwright/test";
import { homeUrl } from "./consts";

test("loads all details of the phone, navbar and a go back button", async ({ page }) => {
  await page.goto(`${homeUrl}/phone/SMG-S24U`);
  await expect(page.getByRole("navigation")).toBeVisible();
  await expect(page.getByRole("button", { name: "Go back" })).toBeVisible();

  await expect(page.getByRole("heading", { name: "Galaxy S24 Ultra" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Galaxy S24 Ultra" })).toBeVisible();
  await expect(page.getByRole("radiogroup", { name: "Storage: How much space do you need?" })).toBeVisible();
  await expect(page.getByRole("radiogroup", { name: "Color: Pick your favourite" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Add to cart" })).toBeVisible();

  await expect(page.getByRole("heading", { name: "Specifications" })).toBeVisible();
  await expect(page.getByRole("table")).toBeVisible();
  await expect(page.getByRole("row", { name: "Brand" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Name" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Description" })).toBeVisible();
  await expect(page.getByRole("row", { name: "SCREEN 6.8" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Resolution" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Processor" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Main Camera" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Selfie Camera" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Battery" })).toBeVisible();
  await expect(page.getByRole("row", { name: "OS" })).toBeVisible();
  await expect(page.getByRole("row", { name: "Screen Refresh Rate" })).toBeVisible();

  await expect(page.getByRole("heading", { name: "Similar Items" })).toBeVisible();
  await expect(page.getByRole("list")).toBeVisible();
  await expect(page.getByRole("listitem")).toHaveCount(4);
});

test("add to cart button enables and price updates when a different storage is selected", async ({ page }) => {
  await page.goto(`${homeUrl}/phone/SMG-S24U`);
  await expect(page.getByRole("button", { name: "Add to cart" })).toBeDisabled();
  await expect(page.getByRole("radio", { name: "256 GB" })).not.toBeChecked();
  await expect(page.getByText("From 1229 EUR")).toBeVisible();

  await page.getByRole("radio", { name: "256 GB" }).click();

  await expect(page.getByText("From 1229 EUR")).not.toBeVisible();
  await expect(page.getByText("1229 EUR")).toBeVisible();
  await expect(page.getByRole("button", { name: "Add to cart" })).toBeEnabled();
});
