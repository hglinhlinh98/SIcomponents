import React from 'react';
import { ComboTree } from 'rc-easyui';
 
class ComboTreeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      data: [
        {
          id: 1,
          text: "My Documents",
          children: [
            {
              id: 11,
              text: "Photos",
              state: "closed",
              children: [
                {
                  id: 111,
                  text: "Friend"
                },
                {
                  id: 112,
                  text: "Wife"
                },
                {
                  id: 113,
                  text: "Company"
                }
              ]
            },
            {
              id: 12,
              text: "Program Files",
              children: [
                {
                  id: 121,
                  text: "Intel"
                },
                {
                  id: 122,
                  text: "Java"
                },
                {
                  id: 123,
                  text: "Microsoft Office"
                },
                {
                  id: 124,
                  text: "Games"
                }
              ]
            },
            {
              id: 13,
              text: "index.html"
            },
            {
              id: 14,
              text: "about.html"
            },
            {
              id: 15,
              text: "welcome.html"
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>Basic ComboTree</h2>
        <ComboTree
          placeholder="Select a node"
          data={this.state.data}
          value={this.state.value}
          onChange={(value) => this.setState({ value: value })}
        />
        <p>You selected: {this.state.value}</p>
      </div>
    );
  }
}
 
export default ComboTreeTest;