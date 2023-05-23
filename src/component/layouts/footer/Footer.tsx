export const Footer = (props: any) => {
  return (
    <div id="footer">
      {props.menu ? (
        props.menu.map((menu: any) => {
          return (
            <a onClick={menu.callback} key={menu.title}>
              {menu.title}
            </a>
          );
        })
      ) : (
        <p className="copyright">V0.1.0 Copyright © 2023 Pinpong.co</p>
      )}
    </div>
  );
};
