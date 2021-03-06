/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
describe('examples', function() {
  it('should format correctly', function() {
    Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
    Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
    Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
    Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});
 */

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
  const hourString = hours.toString().padStart(2, '0')
  seconds = seconds % 3600
  const minutes = Math.floor(seconds / 60)
  const minuteString = minutes.toString().padStart(2, '0')
  seconds = seconds % 60
  const secondsString = seconds.toString().padStart(2, '0')
  return `${hourString}:${minuteString}:${secondsString}`
}
