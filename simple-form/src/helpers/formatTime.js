export default function(timeInput) {
  return timeInput < 10 ? '0' + timeInput : timeInput + '';
}