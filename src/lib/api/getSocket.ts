import ReconnectingWebSocket from "reconnecting-websocket"

export const getSocket = (): ReconnectingWebSocket =>
  new ReconnectingWebSocket(import.meta.env.VITE_WS!)

let socket: ReconnectingWebSocket | null = null
export const getSameSocket = (): ReconnectingWebSocket => {
  if (!socket) {
    console.log("%c[WS] Connected to WebSocket", "color:green; font-size:15px")
    socket = new ReconnectingWebSocket(import.meta.env.VITE_WS!)
  }

  return socket
}
