export function setupEyes() {
  const anchor = document.getElementById("gopher-image")!
  const eyes = document.querySelectorAll(".eye")

  const rect = anchor.getBoundingClientRect()

  const anchorX = rect.left + rect.width / 2
  const anchorY = rect.top + rect.height / 2

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = getAngleDeg(mouseX, mouseY, anchorX, anchorY)

    eyes.forEach((eye) => {
      ;(eye as HTMLElement).style.transform = `rotate(${180 + angleDeg}deg)`
    })
  })
}

function getAngleDeg(mouseX: number, mouseY: number, anchorX: number, anchorY: number) {
  const diffX = mouseX - anchorX
  const diffY = mouseY - anchorY

  const rad = Math.atan2(diffY, diffX)
  return (rad * 180) / Math.PI
}
