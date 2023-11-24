var mainFolder = Folder.selectDialog("Select the main folder");
handleProcess(mainFolder);

function handleProcess(folder) {
  var fileRef = folder.getFiles();
  for (var i = 0; i < fileRef.length; i++) {
    var element = fileRef[i];
    if (element instanceof Folder) {
      handleProcess(element);
    } else {
      var imageName = element.name;
      var number = imageName.charAt(0);
      var letter = imageName.charAt(1);
      var front =
        "F:/photoshop/Laptop/Laptop_Template/02 Used devices - Front.psd ";
      var rear =
        "F:/photoshop/Laptop/Laptop_Template/03 Used devices - Rear.psd";
      var sides =
        "F:/photoshop/Laptop/Laptop_Template/04 Used devices - Sides.psd";
      var polars =
        "F:/photoshop/Laptop/Laptop_Template/05 Used devices - Polars.psd";
      var closeup =
        "F:/photoshop/Laptop/Laptop_Template/06 Used devices - Close up.psd";
      var cover =
        "F:/photoshop/Laptop/Laptop_Template/01 Used devices - Cover.psd";

      if (number == 2) {
        var imageRef = app.open(element);

        var width = imageRef.width;
        var height = imageRef.height;
        imageRef.crop([0, 50, width, height - 50]);
        var newWidth = 1350;
        var newHeight = height * (newWidth / width);
        imageRef.resizeImage(newWidth, newHeight);
        // Select all
        imageRef.selection.selectAll();
        //copy image
        activeDocument.selection.copy();
        //select nothing

        app.activeDocument.selection.deselect();
        // open photoshop file
        // .PSD are trated differently so the code is a bit different.

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(front));
        executeAction(id511, desc109, DialogModes.NO);

        app.activeDocument.paste();

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;

        //app.activeDocument.selection.deselect();
        var store = Folder(imageRef.path + "/New");
        if (!store.exists) store.create();
        var filename =
          imageRef.path +
          "/New/" +
          (number == 1 ? "front" : "back") +
          "_" +
          letter +
          ".jpg";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }

      if (number == 3) {
        var imageRef3 = app.open(element);

        var width = imageRef3.width;
        var height = imageRef3.height;
        var newWidth = 1500;
        var newHeight = 0.6 * height * (newWidth / width);
        imageRef3.resizeImage(newWidth, newHeight);
        imageRef3.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(sides));
        executeAction(id511, desc109, DialogModes.NO);

        // var layerLeft = "left";
        // app.activeDocument.activeLayer =
        //   app.activeDocument.layers.getByName(layerLeft);
        app.activeDocument.paste();
        var tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 0);

        var doc = documents[1];
        var imageRef4 = app.open(fileRef[3]);

        width = imageRef4.width;
        height = imageRef4.height;
        newWidth = 1500;
        newHeight = 0.6 * height * (newWidth / width);
        imageRef4.resizeImage(newWidth, newHeight);
        imageRef4.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();
        app.activeDocument = doc;
        // var layerRight = "right";
        //var docRef = app.activeDocument;
        // docRef.activeLayer = docRef.layers.getByName(layerRight);
        app.activeDocument.paste();
        tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 730);

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        var store = Folder(imageRef3.path + "/New");
        if (!store.exists) store.create();
        var filename =
          imageRef3.path + "/New/" + "sides" + "_" + letter + ".jpg";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef3.close(SaveOptions.DONOTSAVECHANGES);
        imageRef4.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }

      if (number == 5) {
        var imageRef5 = app.open(element);
        var width = imageRef5.width;
        var height = imageRef5.height;
        var newWidth = 1500;
        var newHeight = 0.6 * height * (newWidth / width);
        imageRef5.resizeImage(newWidth, newHeight);
        imageRef5.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(topbottom));
        executeAction(id511, desc109, DialogModes.NO);

        // var layerTop = "top";
        // app.activeDocument.activeLayer =
        //   app.activeDocument.layers.getByName(layerTop);
        // make a reference to the active layer
        app.activeDocument.paste();
        //layerLeftRef.remove();
        var tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 730);
        var imageRef6 = app.open(fileRef[5]);
        width = imageRef6.width;
        height = imageRef6.height;
        var newWidth = 1500;
        var newHeight = 0.6 * height * (newWidth / width);
        imageRef6.resizeImage(newWidth, newHeight);
        imageRef6.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();
        var doc = documents[1];
        app.activeDocument = doc;
        // var layerBottom = "bottom";
        // app.actionDocument.activeLayer =
        //   app.activeDocument.layers.getByName(layerBottom);
        app.activeDocument.paste();
        tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 0);

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        var store = Folder(imageRef5.path + "/New");
        if (!store.exists) store.create();
        var filename =
          imageRef5.path + "/New/" + "topbottom" + "_" + letter + ".jpg";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef5.close(SaveOptions.DONOTSAVECHANGES);
        imageRef6.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }

      if (number == 4) {
        var imageRef1 = app.open(fileRef[0]);
        var width = imageRef1.width;
        var height = imageRef1.height;
        var newWidth = 1150;
        var newHeight = height * (newWidth / width);
        imageRef1.resizeImage(newWidth, newHeight);
        imageRef1.crop([250, 0, 850, newHeight]);
        imageRef1.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(cover));
        executeAction(id511, desc109, DialogModes.NO);
        switch (letter) {
          case "B":
            app.activeDocument.layers["Grade B"].visible = true;
            break;
          case "C":
            app.activeDocument.layers["Grade C"].visible = true;
            break;
          default:
            break;
        }

        app.activeDocument.paste();
        tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 0);

        doc = documents[1];

        var imageRef7 = app.open(fileRef[2]);
        activeDocument.rotateCanvas(-90);
        height = imageRef7.width;
        width = imageRef7.height;
        newHeight = 1430;
        newWidth = height * (newHeight / width);
        imageRef7.resizeImage(newWidth, newHeight);
        imageRef7.crop([500, 0, newWidth, newHeight]);
        imageRef7.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();
        app.activeDocument = doc;
        app.activeDocument.paste();
        tempLayer = app.activeDocument.activeLayer;
        MoveLayerTo(tempLayer, 600, 0);
        var imageRef2 = app.open(fileRef[1]);

        width = imageRef2.width;
        height = imageRef2.height;
        newWidth = 1150;
        newHeight = height * (newWidth / width);
        imageRef2.resizeImage(newWidth, newHeight);
        imageRef2.crop([250, 0, 850, newHeight]);
        imageRef2.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();
        app.activeDocument = doc;
        app.activeDocument.paste();
        tempLayer = app.activeDocument.activeLayer;
        MoveLayerTo(tempLayer, 900, 0);

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        var store = Folder(imageRef1.path + "/New");
        if (!store.exists) store.create();
        var filename =
          imageRef1.path + "/New/" + "cover" + "_" + letter + ".jpg";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef1.close(SaveOptions.DONOTSAVECHANGES);
        imageRef2.close(SaveOptions.DONOTSAVECHANGES);
        imageRef7.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }
    }
  }
}

function MoveLayerTo(fLayer, fX, fY) {
  var Position = fLayer.bounds;
  Position[0] = fX - Position[0];
  Position[1] = fY - Position[1];

  fLayer.translate(-Position[0], -Position[1]);
}
