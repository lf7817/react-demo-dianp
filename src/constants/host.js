let HOST = ''
if (process.env.NODE_ENV === 'development') {
  HOST = ''
} else {
  HOST = 'https://lf7817.github.io/react-demo-dianp/public'
}
export default HOST