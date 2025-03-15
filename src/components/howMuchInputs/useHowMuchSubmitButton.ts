const useHowMuchSubmitButtonHook = () => {
  const onClick = () => {
    console.log('Button clicked')
  }

  return { onClick }
}

export default useHowMuchSubmitButtonHook