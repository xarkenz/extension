import React, {useState, useEffect} from 'react';

import './Popup.css'

import Panel from './components/structure/Panel';
import Navigation from './components/navigation/Navigation';
import FrameContainer from './components/frames/FrameContainer';
import Setting from './components/settings/Setting';
import SettingGroup from './components/settings/SettingGroup';
import AppearanceSelector from './components/display/AppearanceSelector';
import Hover from './components/interactive/Hover'
import ColorSwitch from './components/interactive/ColorSwitch';
import LimitedColorSwitch from './components/interactive/LimitedColorSwitch';
import ActiveSidebarColorSwitch from './components/interactive/ActiveSidebarColorSwitch';
import SidebarBackgroundColorPicker from './components/interactive/color/SidebarBackgroundColorPicker';

const popup = () => {
  // useEffect(() => {
  //   if(true) {
  //     const style = document.createElement('style')
  //     style.innerHTML = `
  //         body {
  //             width: 240px;
  //             height: 400px;
  //         }
  //     `
  //     document.body.appendChild(style)
  //   }
  // }, [])

  const [currentTab, setCurrentTab] = useState("settings")
const tabChangeHandler = (newTabId) => {
  setCurrentTab(newTabId)
}

const frames = {
  "settings": {
    "name": "General",
    "element": (
      <span>
        <SettingGroup name="Navigation">
          <Setting name="Search" setting="search" description="Search through your courses anywhere on Canvas." />
          <Setting name="Smart Scrolling" setting="smartscroll" description="Add buttons to jump to the bottom and top of pages." />
          <Setting name="Quick Inbox" setting="convopeeker" description="Click the Inbox button to quickly view your inbox without having to visit the page." />
          <Setting name="Faster Links" setting="quicklink" description="Improve loading speeds by preloading links. (May cause 403 Forbidden errors.)" />
        </SettingGroup>
      </span>
    )
  }, "display": {
    "name": "Color Scheme",
    "element": (
      <span>
        <div className="center">
          <div className="margin">
            <b>Appearance</b>
            <p className="color-gray small-margin">Change the color scheme of Canvas.</p>
            <p className="color-gray small-margin">Note: Dark and dim mode may have issues. You can report bugs <a href="https://github.com/canvasplus/extension/issues" target="_blank">here</a>.</p>
          </div>
          <AppearanceSelector appearances={[
            {
              name: "Default",
              appearance: "light",
              background: "#eee",
              foreground: "#444"
            },
            {
              name: "Dim",
              appearance: "dim",
              background: "#45484e",
              foreground: "#fff"
            },
            {
              name: "Lights Out",
              appearance: "dark",
              background: "#050d26",
              foreground: "#fff"
            }
          ]}></AppearanceSelector>
        </div>
        <SettingGroup name="Sidebar">
          <Setting name="Hide Logo" setting="hidelogo" description="Hide the logo on the top of the sidebar." />
          <Setting name="Background Color" setting="sidebar-color" description="Change the background color of the sidebar." defaultValue="#1b7ecf" customInput={(state, setState) => { return <SidebarBackgroundColorPicker state={state} setState={setState} />}}/>
          <Setting name="Icon Color" setting="sidebar-icon-color" description="Change the icon color of the sidebar tabs." defaultValue="white" customInput={(state, setState) => { return <LimitedColorSwitch state={state} setState={setState} generateTooltip={(color) => {if(color === "unset") {return <><b>Default Icons</b><p>Sidebar icons will inherit the default colors of your school.</p></>;} else if(["black","white"].includes(color)) {return <><b>{ color.charAt(0).toUpperCase() + color.slice(1) } Icons</b><p>Sidebar icons will always appear in { color }.</p></>} else {return <><b>Custom Icons</b><p>Click to open a color wheel and chose a custom icon color.</p></>;}}}/> }} />
          <Setting name="Active Tab Color" setting="active-sidebar-color" description="Change the background and icon color of the active sidebar tab."  defaultValue={{'background': 'darker', 'icon': 'white'}} customInput={(state, setState) => { return <ActiveSidebarColorSwitch state={state} setState={setState}/> }} />
          <Setting name="Smaller Icons" setting="sidebar-smaller-icons" description="Decrease the size of sidebar icons." />
          <Setting name="More Spacing" setting="sidebar-more-spacing" description="Increase the spacing between sidebar icons." />
        </SettingGroup>
        <SettingGroup name="Miscellaneous">
          <Setting name="Link Color" setting="linkcolor" description="Change the color of links on Canvas." defaultValue="" customInput={(state, setState) => { return <ColorSwitch state={state} setState={setState} />}}/>
          <Setting name="Rounder Modules" setting="roundermodules" description="Tweak modules in the Modules page to be slightly rounder in appearance." />
        </SettingGroup>
      </span>
    )
  }
}

  return (
    <div><Panel size='1'>
    <Navigation onTabChange={tabChangeHandler} currentTab={currentTab} sections={frames}/>
    <FrameContainer currentTab={currentTab} frames={frames}/>
  </Panel></div>

  );
}

export default popup;
