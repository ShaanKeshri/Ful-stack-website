const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRedious,
  fontSize,
  textDecoration,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRedious,
    fontSize,
    textDecoration: 'none',
    cursor: 'pointer',
  };
  return <div style={style}>{children}</div>;
};

export default Avatar;
