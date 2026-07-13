import { copyFile, mkdir, unlink, writeFile } from "node:fs/promises"
import { execFileSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, "..")

const sourcePng = path.join(rootDir, "SANJOY_logos ", "SanjoyShortLogo.png")
const publicIconsDir = path.join(rootDir, "public", "icons")
const appDir = path.join(rootDir, "app")

async function renderPng(size, outputPath) {
  await sharp(sourcePng)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(outputPath)
}

async function removeIfExists(filePath) {
  try {
    await unlink(filePath)
  } catch {
    // Ignore missing files from previous favicon formats.
  }
}

async function main() {
  await mkdir(publicIconsDir, { recursive: true })

  await copyFile(sourcePng, path.join(publicIconsDir, "favicon-source.png"))

  const icon16Path = path.join(publicIconsDir, "icon-16.png")
  const icon32Path = path.join(publicIconsDir, "icon-32.png")
  const icon48Path = path.join(publicIconsDir, "icon-48.png")
  const icon192Path = path.join(publicIconsDir, "icon-192.png")
  const icon512Path = path.join(publicIconsDir, "icon-512.png")
  const appleTouchPath = path.join(publicIconsDir, "apple-touch-icon.png")

  await renderPng(16, icon16Path)
  await renderPng(32, icon32Path)
  await renderPng(48, icon48Path)
  await renderPng(192, icon192Path)
  await renderPng(512, icon512Path)
  await renderPng(180, appleTouchPath)

  const faviconIco = execFileSync(
    "npx",
    ["--yes", "png-to-ico", icon16Path, icon32Path, icon48Path],
    { encoding: "buffer", cwd: rootDir }
  )

  await copyFile(icon512Path, path.join(appDir, "icon.png"))
  await copyFile(appleTouchPath, path.join(appDir, "apple-icon.png"))
  await writeFile(path.join(appDir, "favicon.ico"), faviconIco)

  await removeIfExists(path.join(appDir, "icon.svg"))
  await removeIfExists(path.join(publicIconsDir, "favicon.svg"))

  console.log("Favicon assets generated successfully.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
