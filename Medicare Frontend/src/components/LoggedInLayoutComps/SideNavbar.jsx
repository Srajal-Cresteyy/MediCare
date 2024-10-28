import { Box, Typography } from '@mui/material'

const typoStyles = {
  fontWeight: 'bold',
  color: 'white', // White text to stand out against the gradient

  animation: 'fadeInScale 1s forwards', // Apply animation
}

const SideNavbar = () => {
  return (
    <>
      <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white ">
        <div className="flex items-start px-1 py-3">
          <Typography variant="h6" sx={{ ...typoStyles }}>
            MediCare
          </Typography>
        </div>
        <div className="flex-1">Top Part</div>
        <div>Bottom part</div>
      </div>
    </>
  )
}
export default SideNavbar
