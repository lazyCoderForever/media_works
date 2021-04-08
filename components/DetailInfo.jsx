import { useEffect, useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
const dictionary = require("../static/lang.json");

function DetailPage(user) {
  console.log(user);
  const [addressArr, setAddressKeys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (user) {
      setAddressKeys(Object.entries(user.address));
    }
  }, [user]);
  return (
    <section className='user-detail-info'>
      {addressArr.length > 0 && (
        <>
          <div className='user-data-preview'>
            <span className='user-data-preview_name'>{user && user.name}</span>
            <span className='user-data-preview_email'>
              {user && user.email}
            </span>
          </div>

          <div className='user-data-full'>
            <span className='user-data-full_item '>
              <span className='user-data-full_item_title'>Сайт: </span>
              {user && user.website}
            </span>
            <span className='user-data-full_item '>
              <span className='user-data-full_item_title'>Телефон: </span>
              {user && user.phone}
            </span>
            <span className='user-data-full_item '>
              <span className='user-data-full_item_title'>Компания: </span>
              {user && user.company?.name}
            </span>

            {addressArr.length > 0 && (
              <>
                <Button
                  className='user-data-full_title'
                  color='primary'
                  onClick={toggle}
                  style={{ marginBottom: "1rem" }}
                >
                  <span>Аддрес:</span>
                  <span
                    className={
                      isOpen ? "icon-triangle__active" : "icon-triangle"
                    }
                  ></span>
                </Button>
                <Collapse
                  className='user-data-full_item_address'
                  isOpen={isOpen}
                >
                  <Card>
                    {user &&
                      addressArr.map((el, index) => {
                        if (
                          typeof el[0] === "string" &&
                          typeof el[1] === "string"
                        ) {
                          return (
                            <CardBody
                              key={index}
                              className='user-data-full_item_address_item'
                            >
                              <span className='user-data-full_item_address_item_name'>
                                {`${dictionary[el[0]]}: `}
                              </span>
                              <span className='user-data-full_item_address_item_value'>
                                {el[1]}
                              </span>
                            </CardBody>
                          );
                        }
                      })}
                  </Card>
                </Collapse>

                <ul className=''></ul>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export { DetailPage };
