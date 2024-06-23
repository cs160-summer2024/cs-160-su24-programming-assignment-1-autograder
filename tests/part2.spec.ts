import { expect, test } from "@playwright/test";

test(
  "Task 2a: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/a.html");
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2a: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/a.html");
    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2a: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/a.html");
    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2b: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/b.html");
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2b: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/b.html");
    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2b: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/b.html");
    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2c: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/c.html");
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2c: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/c.html");
    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2c: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/c.html");
    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2d: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/d.html");
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2d: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/d.html");
    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2d: Layout works in a square",
  {
    annotation: {
      type: "points",
      description: "0.5",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/d.html");
    await page.setViewportSize({ width: 720, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);

test(
  "Task 2e: Layout works horizontally",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/e.html");
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page).toHaveScreenshot();
  }
);
test(
  "Task 2e: Layout works vertically",
  {
    annotation: {
      type: "points",
      description: "1",
    },
  },
  async ({ page }) => {
    await page.goto("/part2/e.html");
    await page.setViewportSize({ width: 720, height: 1280 });
    await expect(page).toHaveScreenshot();
  }
);
