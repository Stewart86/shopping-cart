import { Container, Divider, Grid, Link, Typography } from "@material-ui/core"

import { Recommandation } from "../components/Recommandation"

export const NotFound = () => {
  return (
    <Container>
      <Grid
        container
        alignContent='center'
        justify='center'
        alignItems='center'>
        <Typography variant='h1'>404 Not Found</Typography>
        <Typography variant='h6'>
          The page you are looking for is not available. Click{" "}
          <Link href='/'>here</Link> to go back to home page.
        </Typography>
      </Grid>
      <Divider />
      <Grid>
        <Recommandation category='jewelery' />
      </Grid>
    </Container>
  )
}
