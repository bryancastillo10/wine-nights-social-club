import { Stack } from "expo-router";

const FeedLayout = () => {
  return (
      <Stack
          screenOptions={{
            headerShown: false,
            animation:'fade_from_bottom'
          }}
      />
  )
}

export default FeedLayout

