import { Platform, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

module.exports = {
  container: Platform.web ? { whiteSpace: 'pre' } : {},
  view: {},
  em: {
    fontStyle: "italic"
  },
  heading: {
    fontWeight: "200"
  },
  image: {
    width: width - 30,
    height: 320
  },
  text: {
    color: '#545454',
    lineHeight: 28,
  },
  list_text: {
    fontFamily: "PingFang SC",
    fontSize: 16,
    color: '#545454',
    lineHeight: 28,
  },
  list_link: {
    fontFamily: 'PingFang SC',
    fontSize: 16,
    lineHeight: 28,
    textDecorationLine: "none",
    color: "#0056ff"
  },
  heading: {
    color: '#3b3b3b',
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
    fontFamily: 'PingFang SC'
  },
  heading1: {
    fontSize: 28,
    lineHeight: 42
  },
  heading2: {
    fontSize: 24,
    lineHeight: 36
  },
  heading3: {
    fontSize: 22,
    lineHeight: 33
  },
  heading4: {
    fontSize: 20,
    lineHeight: 30
  },
  heading5: {
    fontSize: 18,
    lineHeight: 27
  },
  heading6: {
    fontSize: 16,
    lineHeight: 24
  },
  hr: {
    backgroundColor: "#ededed",
    height: 1,
    marginTop: 8,
    marginBottom: 24
  },
  inline_code: {
    backgroundColor: "#ededed",
    borderColor: "#dddddd",
    borderRadius: 3,
    borderWidth: 1,
    fontFamily: "Courier",
    fontWeight: "bold"
  },
  link: {
    textDecorationLine: "none",
    color: "#0056ff"
  },
  list: {
    paddingLeft: 10,
    paddingRight: 15
  },
  list_item: {
    flexDirection: "column",
    fontSize: 16
  },
  list_item_bullet: {
    fontSize: 20,
    lineHeight: 20,
    marginTop: 6
  },
  list_item_number: {
    fontWeight: "bold"
  },
  mail_to: {
    textDecorationLine: "underline"
  },
  paragraph: {
    marginTop: 16,
    marginBottom: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  list_item_text: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#222222"
  },
  strong: {
    fontWeight: "bold"
  },
  table: {
    borderWidth: 1,
    borderColor: "#222222",
    borderRadius: 3
  },
  tableheader: {
    backgroundColor: "#222222",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tableheader_cell: {
    color: "#ffffff",
    fontWeight: "bold",
    padding: 5
  },
  tablerow: {
    borderBottomWidth: 1,
    borderColor: "#222222",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tablecell: {
    padding: 5
  },
  u: {
    borderColor: "#222222",
    borderBottomWidth: 1
  },
  video: {
    width: 300,
    height: 300
  },
  container: {
    padding: 15,
    paddingTop: 0,
  },
  blockquote_section: {
    flexDirection: "row",
  },
  blockquote_section_bar: {
    width: 3,
    height: null,
    backgroundColor: "#DDDDDD",
    marginRight: 15
  },
  blockquote: {
    padding: 24,
    backgroundColor: '#fafafa'
  },
  code: {
    fontFamily: "Courier",
    fontWeight: "500"
  },
  del: {
    containerBackgroundColor: "#222222"
  },
  space: {

  },
  br: {

  },
  html: {

  }
}
