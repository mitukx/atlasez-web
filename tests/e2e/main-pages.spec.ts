import { test, expect } from "@playwright/test";

/**
 * 主要画面のE2Eテスト。ビルド済みサイト（astro preview）に対して実行する。
 * 実行前に `npm run build` が必要。
 */

test.describe("公式サイト", () => {
  test("ホームに理念とナビゲーションが表示される", async ({ page }) => {
    await page.goto("./");
    await expect(page.locator("h1")).toContainText("Atlasez");
    await expect(
      page.locator("main").getByText("未来の学びを創る。学びで未来を創る。"),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "学習サイト アトラス" }).first(),
    ).toBeVisible();
  });

  test("プロジェクト一覧に学習サイトが載っている", async ({ page }) => {
    await page.goto("projects/");
    await expect(
      page.getByRole("link", { name: /学習サイト「アトラス」/ }),
    ).toBeVisible();
  });

  test("お知らせの個別ページが開ける", async ({ page }) => {
    await page.goto("news/");
    await page.getByRole("link", { name: /ベータ版を公開/ }).click();
    await expect(page.locator("h1")).toContainText("ベータ版");
  });
});

test.describe("学習サイト", () => {
  test("総合ホームに分野と準備中の区別がある", async ({ page }) => {
    await page.goto("atlas/ja/");
    await expect(page.getByRole("link", { name: "数学" })).toBeVisible();
    await expect(page.getByText("準備中").first()).toBeVisible();
  });

  test("記事ページに目次・前提記事・難易度が表示される", async ({ page }) => {
    await page.goto("atlas/ja/mathematics/group-theory/group-definition/");
    await expect(page.locator("h1")).toContainText("群の定義");
    await expect(page.getByRole("navigation", { name: "目次" })).toBeVisible();
    await expect(page.getByText("前提記事")).toBeVisible();
    await expect(page.getByText("標準").first()).toBeVisible();
  });

  test("グリッド／リスト表示を切り替えられる", async ({ page }) => {
    await page.goto("atlas/ja/mathematics/set-theory/");
    const list = page.locator(".article-collection");
    await expect(list).toHaveAttribute("data-view", "grid");
    await page.getByRole("button", { name: "リスト" }).click();
    await expect(list).toHaveAttribute("data-view", "list");
    // 設定が保存される（リロード後も維持）
    await page.reload();
    await expect(list).toHaveAttribute("data-view", "list");
  });

  test("言語切替で英語版記事に移動できる", async ({ page }) => {
    await page.goto("atlas/ja/mathematics/group-theory/group-definition/");
    await page.getByRole("link", { name: "English", exact: true }).click();
    await expect(page).toHaveURL(/\/atlas\/en\//);
    await expect(page.locator("h1")).toContainText("Definition of a Group");
  });

  test("学習地図の代替表示（リスト・表・経路フォーム）がJSなしでも存在する", async ({
    page,
  }) => {
    await page.goto("atlas/ja/map/");
    await expect(
      page.getByRole("heading", { name: "リスト表示（グラフの代替）" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "表形式" })).toBeVisible();
    await expect(page.getByLabel(/目的地点/)).toBeVisible();
  });

  test("学習ルートを計算できる（線形空間→ジョルダン標準形）", async ({
    page,
  }) => {
    await page.goto("atlas/ja/map/");
    await page.getByLabel(/開始地点/).selectOption({ label: "線形空間" });
    await page
      .getByLabel(/目的地点/)
      .selectOption({ label: "ジョルダン標準形" });
    await page.getByRole("button", { name: "経路を表示" }).click();
    const result = page.locator("[data-route-result]");
    await expect(result).toContainText("固有値");
    await expect(result).toContainText("ジョルダン標準形");
    await expect(result).not.toContainText("写像の定義");
  });

  test("表示設定が保存される", async ({ page }) => {
    await page.goto("atlas/ja/");
    await page.getByText("表示設定").click();
    await page.getByLabel("特大").check();
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute(
      "data-pref-font-size",
      "xlarge",
    );
  });
});

test.describe("キーボード操作", () => {
  test("Skip to content が最初のフォーカスで現れる", async ({ page }) => {
    await page.goto("./");
    await page.keyboard.press("Tab");
    await expect(page.locator(".skip-link")).toBeFocused();
  });
});
