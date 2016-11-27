import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const styles = {
  row: {
    color: 'white',
    borderColor: 'rgba(255,255,255,0.025)'
  },
  index: {
    width: '50px',
    fontSize: '30px',
    fontWeight: '300',
    color: 'rgba(255,255,255,0.7)'
  },
  imageHolder: {
    width: 80,
    padding: 0
  },
  image: {
    display: 'block'
  },
  trackHolder: {
    lineHeight: 1.3,
    fontSize: '24px'
  },
  artist: {
    fontSize: '16px',
    fontWeight: 300,
    color: 'rgba(255,255,255,0.7)'
  },
  spotifyHolder: {
    padding: '15px'
  },
  spotifyPlayer: {
    display: 'block',
    float: 'right'
  }
}

const Song = ({ artist, title, url, index, image }) => {
  const trackId = url.replace('https://open.spotify.com/track/', '')
  return (
    <TableRow style={styles.row}>
      <TableRowColumn style={styles.index}>{index}</TableRowColumn>
      <TableRowColumn style={styles.imageHolder}>
        <img src={image} width="80" height="80" alt="" style={styles.image} />
      </TableRowColumn>
      <TableRowColumn style={styles.trackHolder}>
        <div>{title}</div>
        <div style={styles.artist}>{artist}</div>
      </TableRowColumn>
      <TableRowColumn style={styles.spotifyHolder}>
        <iframe
          src={`https://embed.spotify.com/?uri=spotify:track:${trackId}`}
          width="250"
          height="80"
          frameBorder="0"
          allowTransparency="true"
          style={styles.spotifyPlayer}
        />
      </TableRowColumn>
    </TableRow>
  )
}

export default Song
