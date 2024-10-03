export default function guardrail(mathFunction) {
  const queue = []; // Create an empty array named queue

  try {
    const result = mathFunction(); // Execute the mathFunction
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(error.message); // Append the error message to the queue
  }

  queue.push('Guardrail was processed'); // Always append this message to the queue

  return queue; // Return the final queue
}
