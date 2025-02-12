import { get, writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
}

export const websocketConnection = writable<WebSocket | null>(null);

export function connectToWebsocket() {

  const currentWS = get(websocketConnection);
  const isAlreadyConnected = currentWS !== null;

  if (isAlreadyConnected) {
    return currentWS;
  }

  const ws = new WebSocket('ws://192.99.38.163:4000/ws/penis');
  
  ws.addEventListener("open", (event: any) => {
    console.log('WebSocket connection opened:', event);
    keepAlive();
  });
  ws.addEventListener("message", (event: any) => {
    console.log("message : ", event.data)
  })
  ws.addEventListener("close", (event: any) => {
    console.log("WebSocket connection closed:", event)
    websocketConnection.set(null);
  })
  ws.addEventListener("error", (event: any) => {
    console.error("WebSocket error:", event);
  });

  websocketConnection.set(ws);
  
  return ws;
}

function keepAlive() {
  const ws = get(websocketConnection);

  // if (ws) {
  //   const heartbeat = new Heartbeat();
  //   setInterval(() => {
  //     heartbeat.ping();
  //   }, 5000);
  // }
}

export function sendWSMessage(message: WSMessage) {
  const ws = get(websocketConnection);
  ws?.send(message.stringify());
  console.log(message.stringify());
}

export class WSMessage {
  command: string;
  uuid: string;
  data: object;

  constructor(command: string, data: object) {
    this.command = command;
    this.uuid = uuidv4();
    this.data = data;
  }

  stringify(): string {
    return JSON.stringify({
      command: this.command,
      uuid: this.uuid,
      data: this.data
    });
  }
}

class Heartbeat {
  ws: WebSocket | null;
  constructor() {
    this.ws = get(websocketConnection);
  }

  ping() {
    this.ws?.send(JSON.stringify({ command: "ping" }));
    console.log("ping")
  }

  pong() {
    this.ws?.send(JSON.stringify({ command: "pong" }));
    console.log("pong")
  }

}