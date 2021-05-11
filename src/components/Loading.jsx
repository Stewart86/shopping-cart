import { Backdrop, CircularProgress, Fade } from "@material-ui/core"

export const Loading = () => {
  return (
    <Fade in>
      <Backdrop open>
        <CircularProgress color={"primary"} />
      </Backdrop>
    </Fade>
  )
}
