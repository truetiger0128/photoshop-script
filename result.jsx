var mainFolder = Folder.selectDialog("Select the folder to process");
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
      var type = imageName.slice(2, imageName.length - 5);
      var front = "C:/Laptop_Template/02 Used devices - Front.psd ";
      var rear = "C:/Laptop_Template/03 Used devices - Rear.psd";
      var sides = "C:/Laptop_Template/04 Used devices - Sides.psd";
      var polars = "C:/Laptop_Template/05 Used devices - Polars.psd";
      var closeup = "C:/Laptop_Template/06 Used devices - Close up.psd";
      var cover = "C:/Laptop_Template/01 Used devices - Cover.psd";

      if (number == 1) {
        var imageRef = app.open(element);

        var width = imageRef.width;
        var height = imageRef.height;
        var newWidth = 1100;
        var newHeight = height * (newWidth / width);
        imageRef.resizeImage(newWidth, newHeight);
        imageRef.rotateCanvas(90);
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
          imageRef.path + "/New/" + "02 Used devices - Front" + ".png";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }
      if (number == 2) {
        var imageRef2 = app.open(element);

        var width = imageRef2.width;
        var height = imageRef2.height;
        var newWidth = 1100;
        var newHeight = height * (newWidth / width);
        imageRef2.resizeImage(newWidth, newHeight);
        imageRef2.rotateCanvas(-90);
        imageRef2.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(rear));
        executeAction(id511, desc109, DialogModes.NO);

        app.activeDocument.paste();

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;

        //app.activeDocument.selection.deselect();
        var store = Folder(imageRef2.path + "/New");
        if (!store.exists) store.create();
        var filename = imageRef2.path + "/New/" + "03 Used devices - Rear.png";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef2.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }
      if (number == 3) {
        var imageRef3 = app.open(element);
        var width = imageRef3.width;
        var height = imageRef3.height;
        var newWidth = 1600;
        var newHeight = height * (newWidth / width);
        imageRef3.resizeImage(newWidth, newHeight);
        imageRef3.crop([0, 150, newWidth, newHeight - 450]);
        imageRef3.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(sides));
        executeAction(id511, desc109, DialogModes.NO);

        // var layerTop = "top";
        // app.activeDocument.activeLayer =
        //   app.activeDocument.layers.getByName(layerTop);
        // make a reference to the active layer
        app.activeDocument.paste();
        //layerLeftRef.remove();
        var tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 0);
        var imageRef4 = app.open(fileRef[3]);
        width = imageRef4.width;
        height = imageRef4.height;
        var newWidth = 1600;
        var newHeight = height * (newWidth / width);
        imageRef4.resizeImage(newWidth, newHeight);
        imageRef4.crop([0, 0, newWidth, newHeight - 450]);
        imageRef4.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();
        var doc = documents[1];
        app.activeDocument = doc;
        // var layerBottom = "bottom";
        // app.actionDocument.activeLayer =
        //   app.activeDocument.layers.getByName(layerBottom);
        app.activeDocument.paste();
        tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 750);

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        var store = Folder(imageRef3.path + "/New");
        if (!store.exists) store.create();
        var filename = imageRef3.path + "/New/" + "04 Used devices - Sides.png";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef3.close(SaveOptions.DONOTSAVECHANGES);
        imageRef4.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }
      if (number == 4) {
        var imageRef4 = app.open(element);
        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(cover));
        executeAction(id511, desc109, DialogModes.NO);
        switch (letter) {
          case "A":
            app.activeDocument.layers["Grade A"].visible = true;
            break;
          case "B":
            app.activeDocument.layers["Grade B"].visible = true;
            break;
          case "C":
            app.activeDocument.layers["Grade C"].visible = true;
            break;
          case "D":
            app.activeDocument.layers["Grade D"].visible = true;
            break;
          case "E":
            app.activeDocument.layers["Grade E"].visible = true;
          default:
            break;
        }
        app.activeDocument.layers["Camada" + " " + type].visible = true;

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        var store = Folder(imageRef4.path + "/New");
        if (!store.exists) store.create();
        var filename = imageRef4.path + "/New/" + "01 Used devices - Cover.png";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef4.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }
      if (number == 5) {
        var imageRef5 = app.open(element);
        var width = imageRef5.width;
        var height = imageRef5.height;
        var newWidth = 1600;
        var newHeight = height * (newWidth / width);
        imageRef5.resizeImage(newWidth, newHeight);
        imageRef5.crop([0, 0, newWidth, newHeight - 450]);
        imageRef5.selection.selectAll();
        activeDocument.selection.copy();
        app.activeDocument.selection.deselect();

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(polars));
        executeAction(id511, desc109, DialogModes.NO);

        // var layerTop = "top";
        // app.activeDocument.activeLayer =
        //   app.activeDocument.layers.getByName(layerTop);
        // make a reference to the active layer
        app.activeDocument.paste();
        //layerLeftRef.remove();
        var tempLayer = app.activeDocument.activeLayer;

        MoveLayerTo(tempLayer, 0, 0);
        var imageRef6 = app.open(fileRef[5]);
        width = imageRef6.width;
        height = imageRef6.height;
        var newWidth = 1600;
        var newHeight = height * (newWidth / width);
        imageRef6.resizeImage(newWidth, newHeight);
        imageRef6.crop([0, 0, newWidth, newHeight - 450]);
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

        MoveLayerTo(tempLayer, 0, 730);

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;
        var store = Folder(imageRef5.path + "/New");
        if (!store.exists) store.create();
        var filename =
          imageRef5.path + "/New/" + "05 Used devices - Polars.png";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
        imageRef5.close(SaveOptions.DONOTSAVECHANGES);
        imageRef6.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        continue;
      }
      if (number == 7) {
        var imageRef7 = app.open(element);
        var width = imageRef7.width;
        var height = imageRef7.height;
        //imageRef7.crop([0, 0, width, height]);
        var newWidth = 1100;
        var newHeight = height * (newWidth / width);
        imageRef7.resizeImage(newWidth, newHeight);
        imageRef7.rotateCanvas(-90);

        // Select all
        imageRef7.selection.selectAll();
        //copy image
        activeDocument.selection.copy();
        //select nothing

        app.activeDocument.selection.deselect();
        // open photoshop file
        // .PSD are trated differently so the code is a bit different.

        var id511 = charIDToTypeID("Opn ");
        var desc109 = new ActionDescriptor();
        var id512 = charIDToTypeID("null");
        desc109.putPath(id512, new File(closeup));
        executeAction(id511, desc109, DialogModes.NO);

        app.activeDocument.paste();

        var jpegOptions = new JPEGSaveOptions();
        jpegOptions.quality = 12;
        jpegOptions.embedColorProfile = true;
        jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
        jpegOptions.matte = MatteType.NONE;

        //app.activeDocument.selection.deselect();
        var store = Folder(imageRef7.path + "/New");
        if (!store.exists) store.create();
        var filename =
          imageRef7.path + "/New/" + "02 Used devices - Close up.png";
        app.activeDocument.saveAs(new File(filename), jpegOptions, true);
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
