/* eslint-disable max-len */
import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import gdApiICON from './gdapi/Capture.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import blocklyIconURL from './blockly/blockly.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import animatedTextIconURL from './penguinmod/extensions/text extension.png';
import animatedTextInsetIconURL from './penguinmod/extensions/text extension small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import catsIconURL from './cats/download.png';
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';

import customExtensionIcon from './custom/custom.svg';

import filesExtensionIcon from './penguinmod/extensions/files.png';
import jgWebsiteRequestsExtensionIcon from './penguinmod/extensions/websiteRequests.png';
import jgJSONExtensionIcon from './penguinmod/extensions/json.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.png';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.svg';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 🙏
// import lmsMcUtilsIcon from './penguinmod/extensions/mcutils.png';

// more icons so they arent just red when the extension color is not red
import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.png';
import gsaColorUtilExtensionIcon from './penguinmod/extensions/colorutil.png';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth.png';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';

// category expansions
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';

// jg: default icon if you are too lazy to make one and you want me to make one instead lololololololol
// gsa: ololololololo
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';

const urlParams = new URLSearchParams(location.search);

const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');

const menuItems = [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        customInsetColor: '#CF63CF',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },


        
      {
        name: '3D',
        extensionId: 'jg3d',
        iconURL: jg3dExtensionIcon,
        tags: ['penguinmod'],
        customInsetColor: '#B200FF',
        insetIconURL: jg3dInsetExtensionIcon,
        description: 'Use the magic of 3D to spice up your project.',
        featured: true
    },
    {
        name: 'Monitors Plus',
        extensionId: 'https://snail-ide.github.io/Monitors-Plus.js',
        iconURL: defaultExtensionIcon,
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'W.I.P Description',
        featured: true
    },
    {
        name: 'Lazy Collisions',
        extensionId: 'https://snail-ide.github.io/Lazy-Collisions.js',
        iconURL: defaultExtensionIcon,
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'W.I.P Description',
        featured: true
    },
    {
        name: 'Newgrounds Audio',
        extensionId: 'https://snail-ide.github.io/Newgrounds-Audio.js',
        iconURL: defaultExtensionIcon,
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'W.I.P Description',
        featured: true
    },
    {
        name: 'Tile Grids',
        extensionId: 'https://snail-ide.github.io/Tile-Grids.js',
        iconURL: defaultExtensionIcon,
        collaborator: 'SharkPool',
        tags: ['penguinmod'],
        description: 'W.I.P Description',
        featured: true
    },
    {
        name: 'AdaBrowser',
        extensionId: 'adabrowser',
        iconURL: 'https://www.adacraft.org/studio/static/assets/40998229311219c2117265d5e4bd9745.png',
        tags: ['other_mods'],
        customInsetColor: '#B200FF',
        insetIconURL: turbowarpIcon,
        description: 'Interact with the web browser, orginally in Adacraft.',
        featured: true
    },
    {
        name: 'Perlin Noise',
        extensionId: 'iygPerlin',
        iconURL: 'https://studio.penguinmod.site/static/assets/39f37f1b00fbf96926276701d8de4c89.png',
        tags: ['penguinmod'],
        description: "Blocks for generating and using Perlin noise. Good for generating terrain, clouds, and other things.",
        featured: true
    },
    {
        name: 'Blockly2Math',
        extensionId: 'blockly2math',
        iconURL: blocklyIconURL,
        collaborator: 'Google',
        tags: ['penguinmod'],
        description: "Blockly math blocks.",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: 'Animated Text',
        extensionId: 'text',
        iconURL: animatedTextIconURL,
        insetIconURL: animatedTextInsetIconURL,
        customInsetColor: '#9A66FF',
        tags: ['scratch'],
        description: 'Bring words to life.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        customInsetColor: '#74BDDC',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech 2.0"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech2.name"
            />
        ),
        extensionId: 'https://snail-ide.github.io/tts.js',
        collaborator: 'SharkPool',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        customInsetColor: '#9966FF',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech2.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Speech to Text"
                description="Name for the Speech to Text extension"
                id="gui.extension.speech2text.name"
            />
        ),
        extensionId: 'speech2text',
        collaborator: 'Google',
        iconURL: 'https://powerbox1000.github.io/dev-blocks/static/assets/0294d390ec3c5a58f3701b3098646770.png',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Talk to your projects."
                description="Description for the Speech to Text extension"
                id="gui.extension.speech2text.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        customInsetColor: '#5CB1D6',
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        customInsetColor: '#E64D00',
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'Streamilator',
        extensionId: 'https://streamilator.github.io/Streamilator/extension.js',
        twDeveloper: 'mdwalters',
        iconURL: defaultExtensionIcon,
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'A better way to handle audio from urls.',
        featured: true
    },
    {
        name: 'Numerical Encoding',
        extensionId: 'https://extensions.turbowarp.org/cs2627883/numericalencoding.js',
        twDeveloper: 'cs2627883',
        iconURL: 'https://extensions.turbowarp.org/images/cs2627883/numericalencoding.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Encode strings as numbers for cloud variables',
        featured: true
    },
    {
        name: 'Camera Sensing Plus',
        extensionId: 'https://snail-ide.github.io/sensing.js',
        twDeveloper: 'SharkPool',
        iconURL: 'https://viewscreen.githubusercontent.com/view/svg?browser=chrome&bypass_fastly=true&color_mode=dark&commit=ba342a9d0fb3f3ee92bad604f3dd985888be1ae1&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f536861726b506f6f6c2d53502f536861726b506f6f6c732d457874656e73696f6e732f626133343261396430666233663365653932626164363034663364643938353838386265316165312f657874656e73696f6e2d7468756d62732f43616d6572612d53656e73696e672d506c75732e737667&logged_in=true&nwo=SharkPool-SP%2FSharkPools-Extensions&path=extension-thumbs%2FCamera-Sensing-Plus.svg&platform=linux&repository_id=668067482&repository_type=Repository&version=116#1060ffb0-fda8-4ee7-aa38-c842750410b4',
        tags: ['turbowarp'],
        description: 'Improved camera sensing',
        featured: true
    },
    {
        name: 'ChatGPT',
        extensionId: 'https://anonymous-cat1.github.io/WorkingTurboGPT/extension.js',
        twDeveloper: 'Anonymous-cat1',
        iconURL: 'https://camo.githubusercontent.com/c317b9c3d7681a40fb286d644fa3fdb0b2dbc4434840b004e86b77d62b331bbe/68747470733a2f2f616e6f6e796d6f75732d636174312e6769746875622e696f2f576f726b696e67547572626f4750542f696d672f7468756d622e737667',
        tags: ['turbowarp'],
        description: 'Use ChatGPT in your projects',
        featured: true
    },
    {
        name: 'Dot Prop',
        extensionId: 'https://gistcdn.githack.com/Richienb/bd67c0d65a187eea28bd18d0e04c1052/raw/061ef801c8b474c75f830805b59947b81d8d4257/index.min.js',
        twDeveloper: 'Richienbs',
        iconURL: defaultExtensionIcon,
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Legacy Extension from version 1.0',
        featured: true
    },
    {
        name: 'Classic Cloud Multiplayer',
        extensionId: 'https://emmettdewet14.github.io/Cloud.js',
        twDeveloper: 'emmettdewet14',
        iconURL: defaultExtensionIcon,
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Legacy Extension from version 1.0',
        featured: true
    },
    {
        name: '0tils',
        extensionId: 'https://survexe1pc.github.io/unsafe-extensions/0znzw/0tils.js',
        twDeveloper: '0znzw',
        iconURL: 'https://survexe1pc.github.io/unsafe-extensions/images/0znzw/0tils.png',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Placeholder',
        featured: true
    },
    {
        name: 'Cats',
        extensionId: 'https://penguinmod-extensions-gallery.vercel.app/extensions/Gen1x/CATS.js',
        collaborator: ' G1nX',
        iconURL: catsIconURL,
        tags: ['penguinmod'],
        description: 'Blocks to give you cat facts. 😻',
        featured: true,
    },
    {
        name: 'Wacky Joke Blocks',
        extensionId: 'https://snail-ide.github.io/joke.js',
        collaborator: 'Mr_rudy/nmsderp',
        iconURL: 'https://c8.alamy.com/comp/RB1P6W/young-handsome-business-man-laughing-of-you-pointing-to-the-camera-with-finger-hand-over-chest-shame-expression-RB1P6W.jpg',
        tags: ['penguinmod'],
        description: 'why did i make this',
        featured: true,
    },
    {
        name: 'Zip',
        extensionId: 'https://extensions.turbowarp.org/CST1229/zip.js',
        twDeveloper: 'CST1229',
        iconURL: 'https://extensions.turbowarp.org/images/CST1229/zip.svg',
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Create and edit .zip format files, including .sb3 files.',
        featured: true
    },

    {
        name: 'Files',
        extensionId: 'twFiles',
        twDeveloper: 'GarboMuffin',
        iconURL: filesExtensionIcon,
        insetIconURL: turbowarpIcon,
        tags: ['turbowarp'],
        description: 'Blocks for reading and creating files.',
        featured: true
    },
    {
        name: 'Extended Sound',
        extensionId: 'jgExtendedAudio',
        iconURL: jgExtendedAudioExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'Free speed and pitch control, starting sounds at certain positions, stopping sounds, etc.',
        featured: true
    },
    {
        name: 'Operators Expansion',
        extensionId: 'pmOperatorsExpansion',
        iconURL: pmOperatorsExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: 'More operators like nand, nor, character code to character, reading multiple lined text line by line, etc.',
        featured: true
    },
    {
        name: 'Sensing Expansion',
        extensionId: 'pmSensingExpansion',
        iconURL: pmSensingExpansionExtensionIcon,
        tags: ['penguinmod', 'categoryexpansion'],
        description: "More sensing blocks for specific use cases or interacting with the user's device.",
        featured: true
    },
    {
        name: 'JSON',
        extensionId: 'jgJSON',
        iconURL: jgJSONExtensionIcon,
        tags: ['penguinmod'],
        description: 'Blocks for handling JSON objects and Arrays.',
        featured: true
    },
    {
        name: 'Physics',
        extensionId: 'https://extensions.turbowarp.org/box2d.js',
        tags: ['turbowarp'],
        extDeveloper: 'griffpatch',
        iconURL: griffpatchPhysicsThumb,
        insetIconURL: griffpatchPhysicsIcon,
        description: 'Box2D Physics extension created by Griffpatch.',
        customInsetColor: '#D9F0FF',
        featured: true
    },
    {
        name: 'Tweening',
        extensionId: 'jgTween',
        credits: 'easings.net & Arrow',
        description: 'Smoothly animating values using different easing functions and directions.',
        iconURL: 'https://extensions.turbowarp.org/images/JeremyGamer13/tween.svg',
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: 'Clones+',
        extensionId: 'https://extensions.turbowarp.org/Lily/ClonesPlus.js',
        tags: ['turbowarp', 'categoryexpansion'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/ClonesPlus.svg',
        insetIconURL: turbowarpIcon,
        description: "Expansion of Scratch's clone features.",
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Multiple Timers',
        extensionId: 'jgTimers',
        iconURL: jgTimersExtensionIcon,
        tags: ['penguinmod'],
        description: 'Create different timers you can control seperately.',
        eventSubmittor: 'Arrow',
        featured: true
    },
    {
        name: 'Temporary Variables',
        extensionId: 'tempVars',
        iconURL: gsaTempVariablesExtensionIcon,
        tags: ['penguinmod'],
        description: 'Create variables for use in one block stack. Useful to not clutter the variable list with variables you only use once.',
        featured: true
    },
    {
        name: 'Runtime Modifications',
        extensionId: 'jgRuntime',
        tags: ['penguinmod'],
        iconURL: jgRuntimeExtensionIcon,
        description: 'Blocks for updating Scratch objects like the stage and sprites.',
        credits: 'TheShovel, showierdata9978',
        featured: true
    },
    {
        name: 'Better Storage',
        extensionId: 'https://extensions.penguinmod.site/extensions/Gen1x/better_storage.js',
        iconURL: 'https://extensions.penguinmod.site/images/Gen1x/betterstorage.png',
        tags: ['penguinmod'],
        description: 'Like PenguinMods Storage Extension, but with a couple more features, and faster servers.',
        collaborator: 'G1nX',
        featured: true
    },
    {
        name: 'Storage',
        extensionId: 'jgStorage',
        iconURL: jgStorageExtensionIcon,
        tags: ['penguinmod'],
        description: 'Store data after PenguinMod has already been closed out. Basic Server Storage is also included.',
        eventSubmittor: 'Fir & silvxrcat',
        featured: true
    },
    {
        name: 'Website Requests',
        extensionId: 'jgWebsiteRequests',
        iconURL: jgWebsiteRequestsExtensionIcon,
        tags: ['penguinmod'],
        description: 'Blocks to communicate with APIs and websites.',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'CloudLink',
        extensionId: 'https://extensions.turbowarp.org/cloudlink.js',
        tags: ['turbowarp'],
        insetIconURL: cloudlinkIcon,
        iconURL: 'https://extensions.turbowarp.org/images/cloudlink.svg',
        description: 'A cool extension to interact with webservers',
        featured: true,
        extDeveloper: 'MikeDev',
        internetConnectionRequired: false
    },
    {
        name: 'Prism',
        extensionId: 'jgPrism',
        tags: ['penguinmod'],
        iconURL: jgPrismExtensionIcon,
        description: 'Blocks for specific use-cases or major convenience.',
        featured: true
    },
    {
        name: 'Odd Messages',
        extensionId: 'oddMessage',
        iconURL: silvxrcatOddMessagesExtensionIcon,
        description: 'For logging and variable utilization.',
        featured: true,
        extDeveloper: 'silvxrcat'
    },
    {
        name: 'HTML iframe Elements',
        extensionId: 'jgIframe',
        iconURL: jgIframeExtensionIcon,
        tags: ['penguinmod'],
        description: 'Blocks to place and move around frames that contain HTML content or websites.',
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Color Utility Blocks',
        extensionId: 'colors',
        iconURL: gsaColorUtilExtensionIcon,
        tags: ['penguinmod'],
        description: 'Converters for Hex, RGB, HSV and Decimal colors and other color related things.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Labels"
                description="Name of Proto extension"
                id="jwProto.jwProtoExtension.name"
            />
        ),
        extensionId: 'jwProto',
        iconURL: jwProtoExtensionIcon,
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                // change this back if you update the extension to have more things
                defaultMessage="Labelling and Placeholders."
                description="Description of Proto extension"
                id="jwProto.jwProtoExtension.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="OOP"
                description="Name of OOP extension"
                id="jwStructs.jwStructsExtension.name"
            />
        ),
        extensionId: 'jwStructs',
        tags: ['penguinmod'],
        iconURL: jwStructsExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="OOP blocks. OOp is a programming paradigm that uses objects and their interactions to design applications and computer programs."
                description="Description of OOP extension"
                id="jwStructs.jwStructsExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'McUtils',
        extensionId: 'https://extensions.turbowarp.org/Lily/McUtils.js', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://extensions.turbowarp.org/images/Lily/McUtils.png',
        insetIconURL: turbowarpIcon,
        description: 'Basic utilities for any fast food employee',
        featured: true,
        twDeveloper: 'LilyMakesThings'
    },
    {
        name: 'Longman Dictionary',
        extensionId: 'https://extensions.turbowarp.org/veggiecan/LongmanDictionary.js', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://extensions.turbowarp.org/images/veggiecan/LongmanDictionary.png',
        insetIconURL: turbowarpIcon,
        description: 'Get the definitions of words from the Longman Dictionary',
        featured: true,
        twDeveloper: 'veggiecan0419'
    },
    {
        name: 'Beepbox',
        extensionId: 'beepboxsynth', // update reference once file names are updated
        tags: ['turbowarp'],
        iconURL: 'https://jasonglenevans.github.io/GvbvdxxMod2/static/assets/d0a53858e0c079c8b99e85a652b4d1d9.png',
        insetIconURL: 'https://jasonglenevans.github.io/GvbvdxxMod2/static/assets/ba43bca2715721d8cb5ddbdb38267da0.png',
        description: 'Make some moosic',
        featured: true,
        twDeveloper: 'jasonglenevans'
    },
    {
        name: 'Snail Extras',
        extensionId: 'https://snail-ide.github.io/snail_extras.js', // update reference once file names are updated
        tags: ['penguinmod'],
        iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RWnel-yFH8B7obNf21l-F1DpJ7eCVd2oq2SeHm89Xw&s',
        insetIconURL: turbowarpIcon,
        description: 'Snail IDE Extras',
        featured: true,
        twDeveloper: 'Mr_rudy'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="HTML Canvas"
                description="Name of Text extension"
                id="canvas.name"
            />
        ),
        extensionId: 'canvas',
        iconURL: canvasExtensionBanner,
        tags: ['penguinmod'],
        insetIconURL: canvasExtensionIcon,
        customInsetColor: '#0094FF',
        description: (
            <FormattedMessage
                defaultMessage="Extra drawing tools using an HTML Canvas. Works well when used with other extensions."
                description="Description of Text extension"
                id="text.description"
            />
        ),
        featured: true
    },
    {
        name: 'Gamepad',
        extensionId: 'Gamepad',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        twDeveloper: 'GarboMuffin',
        iconURL: 'https://extensions.turbowarp.org/images/gamepad.svg',
        description: (
            <FormattedMessage
                defaultMessage="Directly access gamepads instead of just mapping buttons to keys."
                description="Description for the 'GamePad' extension"
                id="GamepadExtension.GamepadExtension.description"
            />
        ),
        featured: true
    },
    {
        name: 'Camera Controls',
        extensionId: 'pmCamera',
        iconURL: 'https://studio.penguinmod.site/static/assets/6b8350e1c4fcb14dddb1c4bac60690fc.png',
        tags: ['penguinmod'],
        description: (
            <FormattedMessage
                defaultMessage="Move the visible part of the stage."
                description=""
                id="gui.extension.cameracontrols.description"
            />
        ),
        featured: true,
    },
    {
        name: 'Clipping and Blending',
        extensionId: 'xeltallivclipblend',
        iconURL: clippingblending,
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        description: 'Clipping outside of a specified rectangular area and additive color blending.',
        featured: true,
        twDeveloper: 'Vadik1'
    },
    {
        name: 'Pointer Lock',
        extensionId: 'https://extensions.turbowarp.org/pointerlock.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        iconURL: pointerlockThumb,
        description: (
            <FormattedMessage
                defaultMessage="A extension to lock the mouse cursor in the stage"
                description="Scratch utilities"
                id="gui.extension.pointerlock.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Mouse Cursor',
        extensionId: 'https://extensions.turbowarp.org/cursor.js',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        iconURL: cursorThumb,
        description: (
            <FormattedMessage
                defaultMessage="A extension to change what the mouse cursor looks like on the stage"
                description="Scratch utilities"
                id="gui.extension.MouseCursor.description"
            />
        ),
        featured: true,
        internetConnectionRequired: false,
        twDeveloper: 'GarboMuffin'
    },
    {
        name: 'Scratch Authentication',
        extensionId: 'jgScratchAuthenticate',
        iconURL: jgScratchAuthExtensionIcon,
        tags: ['penguinmod'],
        description: "Get a user's scratch name to prove they are a real scratch user.",
        featured: true
    },
    {
        name: 'Video',
        extensionId: 'https://extensions.turbowarp.org/Lily/Video.js',
        iconURL: 'https://extensions.turbowarp.org/images/Lily/Video.svg',
        insetIconURL: turbowarpIcon,
        twDeveloper: 'LillyMakesThings',
        tags: ['turbowarp'],
        description: "Play videos from URLs.",
        featured: true
    },
    {
        name: 'micro:bit (Adacraft)',
        extensionId: 'vittamicrobit',
        iconURL: 'https://www.adacraft.org/studio/static/assets/36854ae363289b372d95a65546decb87.png',
        tags: ['other_mods','hardware'],
        description: "Blocks to interact with BBC micro:bit through a USB cable connection.",
        featured: true
    },
    {
        name: 'Adacraft Runtime',
        extensionId: 'adaruntime',
        iconURL: 'https://www.adacraft.org/studio/static/assets/53d3dbd30eb60a7860a3ffdb4753a43f.png',
        tags: ['other_mods'],
        description: "Special blocks that interact with the vm.",
        featured: true
    },
    {
        name: '3D VR',
        extensionId: 'jg3dVr',
        iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsXcntVmSk264zyLaS3GdbOBQPhk3JjE5Vg&usqp=CAU',
        tags: ['penguinmod'],
        description: "Unfinished PenguinMod Extension.",
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="PenguinMod Extra Extensions"
                description="Name of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.name"
            />
        ),
        href: 'https://extensions.penguinmod.site/',
        extensionId: 'special_penguinmodExtensionLibrary',
        iconURL: 'https://studio.penguinmod.site/static/assets/7a4510ab192e5a0bd0b1186db1396bce.svg',
        description: (
            <FormattedMessage
                defaultMessage="See some user-submitted extensions. Opens in a new tab."
                description="Description of library item to open the Extra Extensions gallery"
                id="pm.extraLibraryExtensions.description"
            />
        ),
        tags: ['penguinmod'],
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Extension Gallery"
                description="Name of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.name"
            />
        ),
        href: 'https://extensions.turbowarp.org/',
        extensionId: 'special_turbowarpExtensionLibrary',
        iconURL: 'https://studio.penguinmod.site/static/assets/fa121178a0dc748c56257f39987f0540.svg',
        description: (
            <FormattedMessage
                // eslint-disable-next-line max-len
                defaultMessage="We list many TurboWarp extensions here for convenience, but you can find even more on extensions.turbowarp.org."
                description="Description of extensions.turbowarp.org in extension library"
                id="tw.extensionGallery.description"
            />
        ),
        tags: ['penguinmod'],
        featured: true
    },
    // https://extensions.turbowarp.org/shreder95ua/resolution.js
    {
        name: 'Screen Resolution',
        extensionId: 'https://extensions.turbowarp.org/shreder95ua/resolution.js',
        iconURL: 'https://extensions.turbowarp.org/images/shreder95ua/resolution.svg',
        twDeveloper: 'shreder95ua',
        description: 'Get the resolution of the primary screen.',
        featured: true

    },
    {
        name: 'TypeScratch',
        extensionId: 'typescratch',
        iconURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        tags: ['penguinmod', 'programminglanguage'],
        description: "Similar to the JavaScript extension but for TypeScript",
        featured: true
    },
    {
        name: 'JavaScript',
        extensionId: 'jgJavascript',
        iconURL: jgJavascriptExtensionIcon,
        tags: ['penguinmod', 'programminglanguage'],
        description: 'Run your own custom code written in JavaScript!',
        featured: true
    },
    {
        name: 'Better Input',
        extensionId: 'https://extensions.penguinmod.site/extensions/SharkPool/BetterInput.js',
        iconURL: 'https://extensions.penguinmod.site/images/SharkPool/BetterInput.svg',
        tags: ['penguinmod'],
        collaborator: 'SharkPool-SP',
        description: 'Expansion to the Ask and Wait blocks.',
        featured: true
    },
    {
        name: 'GD API',
        extensionId: 'https://snail-ide.github.io/examples/gd/gd.js',
        iconURL: gdApiICON,
        tags: ['penguinmod'],
        collaborator: 'SharkPool-SP',
        description: 'Access the GD api.',
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="TurboWarp Blocks"
                description="Name of TW extension"
                id="tw.twExtension.name"
            />
        ),
        extensionId: 'tw',
        twDeveloper: 'GarboMuffin',
        tags: ['turbowarp'],
        insetIconURL: turbowarpIcon,
        iconURL: twIcon,
        description: 'Weird new blocks.',
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        tags: ['scratch'],
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        tags: ['scratch', 'hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        customInsetColor: '#FFBF00',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        tags: ['scratch','hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        customInsetColor: '#FFAB19',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        tags: ['scratch','hardware'],
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        customInsetColor: '#FF6680',
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        customInsetColor: '#4C97FF',
        tags: ['scratch','hardware'],
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
    }
];

if (IsLocal || IsLiveTests) {
    const extras = [
        {
            name: 'Legacy Files',
            extensionId: 'jgFiles',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Basic blocks for files. This has been replaced by the TurboWarp files extension.',
            featured: true
        },
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'Mainly sharing data between clones and the main sprite, but also some other small features. This has been replaced by the TurboWarp Clones+ extension.',
            featured: true
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension that was eventually merged into the default toolbox.',
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension, old blocks no longer serve a real purpose. Direct blocks to manage permissions that PenguinMod requires you have to do certain tasks.',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Test extension to see if things are possible.\nDO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            featured: true
        },

        {
            name: 'Advanced Text',
            extensionId: 'jgAdvancedText',
            eventSubmittor: 'eggo',
            iconURL: jgAdvancedTextExtensionIcon,
            tags: ['penguinmod'],
            description: 'In development.\nThis extension is still HIGHLY in development. DO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            featured: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: 'In development.\nThis extension is still HIGHLY in development. DO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            featured: true
        },
        {
            name: 'Costume Drawing',
            extensionId: 'jgCostumeDrawing',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Draw on and edit your costumes (either temporarily or not) while the project is running.\nThis extension is still HIGHLY in development. DO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            featured: true
        },
        // {
        //     name: "Javascript",
        //     extensionId: 'jgJavascript',
        //     iconURL: defaultExtensionIcon,
        //     tags: ["penguinmod"],
        //     description: "this should have been removed from PM permanently",
        //     featured: true
        // },
        {
            name: 'the doo doo extension',
            extensionId: 'jgDooDoo',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'dr bob eae',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="Text to Speech"
                    description="Name for the Text to Speech extension"
                    id="gui.extension.text2speech.name"
                />
            ),
            extensionId: 'text2speech',
            collaborator: 'Amazon Web Services',
            iconURL: text2speechIconURL,
            insetIconURL: text2speechInsetIconURL,
            customInsetColor: '#9966FF',
            tags: ['scratch'],
            description: (
                <FormattedMessage
                    defaultMessage="Make your projects talk."
                    description="Description for the Text to speech extension"
                    id="gui.extension.text2speech.description"
                />
            ),
            featured: true,
            internetConnectionRequired: true
        },
        {
            name: 'Inline Blocks',
            extensionId: 'pmInlineBlocks',
            iconURL: pmInlineBlocksExtensionIcon,
            tags: ['penguinmod'],
            description: 'Create quick blocks for simple tasks. Insert them into any circle spot and have them return any value you want.',
            featured: true
        }
    ];
    extras.forEach(ext => {
        menuItems.push(ext);
    });
}

export default menuItems;
