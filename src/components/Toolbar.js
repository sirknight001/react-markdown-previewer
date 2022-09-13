const Toolbar = (props) => {
    return (
      <div className="toolbar">
        <i title="no-stack-dub-sack" />
        {props.text}
        <i className={props.icon} onClick={props.onClick} />
      </div>
    );
  };

  export default Toolbar