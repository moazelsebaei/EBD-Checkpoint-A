// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)

// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);

    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    item: order.item,
    price: order.price,
  }));

  return JSON.stringify(simplifiedOrders);
}