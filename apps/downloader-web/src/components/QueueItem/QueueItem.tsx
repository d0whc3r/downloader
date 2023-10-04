import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { SyntheticEvent } from 'react'

import {
  StyledCard,
  StyledCardContainer,
  StyledCardContent,
  StyledCardControls,
} from '@web/components/QueueItem/QueueItem.styles'
import { useQueue } from '@web/store'

type QueueItemProps = {
  id: string
}

export function QueueItem({ id }: QueueItemProps) {
  const [queue, setQueue] = useQueue(id)

  console.log('queue', queue)

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement
    target.onerror = null
    target.src = '/img/image-placeholder.png'
  }

  return (
    <StyledCard raised={true}>
      <StyledCardContainer>
        <CardMedia
          sx={{ width: '150px' }}
          component="img"
          image="/static/images/cards/live-from-space.jpg"
          alt="Live image"
          onError={handleImageError}
        />
        <StyledCardContent>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </StyledCardContent>
        <StyledCardControls>
          <IconButton aria-label="previous">
            {/*<SkipPreviousIcon />*/}
          </IconButton>
          <IconButton aria-label="play/pause">
            {/*<PlayArrowIcon sx={{ height: 38, width: 38 }} />*/}
          </IconButton>
          <IconButton aria-label="next">{/*<SkipNextIcon />*/}</IconButton>
        </StyledCardControls>
      </StyledCardContainer>
    </StyledCard>
  )
}
