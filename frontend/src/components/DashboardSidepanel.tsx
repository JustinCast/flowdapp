/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MdDashboard } from 'react-icons/md'
import { FaPeopleCarry } from 'react-icons/fa'
const { Grid } = require('@theme-ui/components')
const { Box } = require('@theme-ui/components')
const { Card } = require('@theme-ui/components')
const { Button } = require('@theme-ui/components')
const { Flex } = require('@theme-ui/components')
export default function DashboardSidepanel() {
  return (
    <Grid columns={[1, null, 2]}>
      <Card
        sx={{
          width: ['25%', '25%', '45%'],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            bg: 'column',
            width: '100%',
            p: 2,
            borderTadius: 5,
            height: '100',
          }}
        >
          <Button
            sx={{
              bg: 'muted',
              color: 'text',
              mb: '2',
              textAlign: 'left',
              fontWeight: '3',
            }}
          >
            <MdDashboard /> Boards
          </Button>
          <Button
            sx={{
              bg: 'muted',
              color: 'text',
              textAlign: 'left',
            }}
          >
            <FaPeopleCarry /> Teams
          </Button>
        </Flex>
      </Card>
      <Box bg="primary">Box</Box>
    </Grid>
  )
}
