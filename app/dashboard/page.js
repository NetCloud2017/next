async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { message: "hello dashboard" };
}
export default async function Dashboard() {
  const { message } = await getData();
  return <div>{message}</div>;
}
