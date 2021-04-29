const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px white'
  },
  titleInput: {
    height: '50px',
    boxSizing: 'border-box',
    border: 'none',
    padding: '5px',
    fontSize: '24px',
    width: 'calc(100% - 300px)',
    backgroundColor: '#353434',
    color: 'white',
    paddingLeft: '50px'
  },
  editIcon: {
    position: 'absolute',
    left: '310px',
    top: '12px',
    color: 'white',
    width: '10',
    height: '10'
  },
  editorContainer: {
    height: '100%',
    boxSizing: 'border-box',
  },
  expandIcon: {
    fontSize: "2rem !important",
    cursor: "pointer",
    marginRight: "1rem",
    display: 'flex',
    position: 'absolute',
    right: '0'
  }
});

export default styles;