let familyTree = new FamilyTree2(document.getElementById('tree')); 
familyTree.readOnly = false;

familyTree.onUpdated(function(args){
    //args.insert //new family members
    //args.remove //removed family members
    //args.update //updated family members
    console.log(args)
});


fetch('data.json')
  .then(response => response.json())
  .then(data => familyTree.addFamilyMembers(data).draw(1));