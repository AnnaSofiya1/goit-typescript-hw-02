import { Watch } from 'react-loader-spinner'


export default function Loader({isLoading}) {
  return (
    <Watch
  visible={isLoading}
  height="50"
  width="50"
  radius="48"
  color= "#8b008b"
  ariaLabel="watch-loading"
          wrapperStyle={{
              marginTop: '20px',
             display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
  }}
  />
  )
}
