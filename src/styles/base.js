const { StyleSheet } = React;
import * as device from '_utils/device';

export default StyleSheet.create({
  root_view: {
    flex: 1
  },
  root_view_wrapper: {
    flex: 1
  },
  navigator: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff'
  },
  title_blank: {
    width: 3000,
    fontSize: device.fontSize(18),
    lineHeight: device.fontSize(32),
    color: '#000'
  },
  title_plain: {
    fontSize: device.fontSize(18),
    color: '#4c4b4d',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: device.fontSize(34)
  },
  title: {
    backgroundColor : '#fff',
    borderBottomColor: '#E8E8E6',
    borderBottomWidth: 1,
    height: device.size(45)
  },
  title_item: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: device.size(6),
    fontSize: device.fontSize(18),
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: device.fontSize(27)
  },
  crumbIconPlaceholder: {
    flex: 1,
    height: device.size(145),
    paddingTop: device.size(10),
    paddingRight: device.size(10),
    paddingLeft: device.size(10)
  },
  crumbIcon: {
    fontSize: device.fontSize(26),
    color: '#000'
  }
})