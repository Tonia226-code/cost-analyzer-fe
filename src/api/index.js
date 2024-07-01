export async function getProcesses() {
  const url = "https://run.mocky.io/v3/666f48ac-9b2f-443e-8a84-9441fcb0363b";
  try {
    const response = await fetch(url);
    if (response) {
      const processes = await response.json();
      return processes;
    }
  } catch (error) {
    console.log(error);
  }
}
