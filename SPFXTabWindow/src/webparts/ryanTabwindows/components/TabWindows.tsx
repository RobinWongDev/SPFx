import * as React from "react";
import {
  Label,
  Menu,
  Tab,
  Item,
  Image,
  Icon,
  Button,
  Header
} from "semantic-ui-react";

const paragraphPlaceholder = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);
const imagePlaceholder =
  "https://react.semantic-ui.com/images/wireframe/image.png";

const getItems = arrObj => {
  return arrObj.map(obj => (
    <Item>
      <Item.Image src={obj.image ? obj.image : imagePlaceholder} />
      <Item.Content>
        <Item.Header as="a">{obj.title}</Item.Header>
        <Item.Meta>
          <span className="cinema">{obj.meta}</span>
        </Item.Meta>
        <Item.Description>
          {obj.paragraph ? obj.paragraph : paragraphPlaceholder}
        </Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            {obj.buttonContent}
            <Icon name={obj.buttonIcon} />
          </Button>
          <Label>{obj.tag}</Label>
          <Label icon={obj.labelIcon} content={obj.labelContent} />
        </Item.Extra>
      </Item.Content>
    </Item>
  ));
};

const generatePanes = arrObj => [
  {
    menuItem: { key: "news", icon: "newspaper", content: "News" },
    render: () => (
      <Tab.Pane>
        <Item.Group divided>
          {getItems(arrObj.filter(obj => obj.pane == 1))}
        </Item.Group>
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key="messages">
        Development<Label>{arrObj.filter(obj => obj.pane == 2).length}</Label>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <Item.Group divided>
          {getItems(arrObj.filter(obj => obj.pane == 2))}
        </Item.Group>
      </Tab.Pane>
    )
  }
];

//? Images must be square for consistency.
const TabWindows = props => (
  <React.Fragment>
    <h2>Flash News</h2>
    <Tab panes={generatePanes(props.data)} />
  </React.Fragment>
);

export default TabWindows;
