for (const p of people) {
  if (p === "조커") {
    sendAlert();
    return;
  }

  if (p === "사루만") {
    sendAlert();
    return;
  }
}

/**
 * 위 코드를 더 리팩터링한다면 ?
 */

if (people.some((p) => ["조커", "사루만"].includes(p))) {
  sendAlert();
}
